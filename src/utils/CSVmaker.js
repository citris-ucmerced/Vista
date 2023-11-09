//This is a script to pull the latest data on Events from F3 Website
// to keep the two sites current.
//In here we use the GitHub API to access the citirs-ucmerced repo: https://github.com/citris-ucmerced
// In order for the API to work you will need to provide a token. Here is a guide I followed: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic
// Create a config.js file with the token

//Use `node CSVmaker.js` to run


const fs = require('fs');

const accessToken = require('../utils/config'); // Importing the access token

function convertArrayOfObjectsToCSV(data) {
    const header = Object.keys(data[0]);
    const csv = [
        header.join(','),
        ...data.map(row => header.map(fieldName => row[fieldName]).join(','))
    ].join('\n');

    return csv;
}

const writeFilePath = '../assets/sheets/eventGrabbed.csv'; // Replace with your desired path and file name

function writeCSVToFile(data, filepath) {
    const csv = convertArrayOfObjectsToCSV(data);

    fs.writeFile(filepath, csv, err => {
        if (err) {
            console.error('Error writing CSV file:', err);
            return;
        }
        console.log(`CSV file ${filepath} has been created.`);
    });
}

const convertStringToCSV = (csvString) => {
  if (!csvString) {
    return ; // Return an empty array if csvString is undefined or null
  }
  
  const rows = csvString.split('\n');
  const headers = rows[0].split(','); // Assuming the first row contains headers
  const events = rows.slice(1).map(row => {
    const rowData = row.split(',');
    const event = {};
    headers.forEach((header, index) => {
      event[header] = rowData[index];
    });
    return event;
  });
  return events;
};

const csvWriter = () => {

  const filePath = '/src/assets/sheets/events.csv';
  const url = `https://api.github.com/repos/citris-ucmerced/F3/contents${filePath}`;

  fetch(url, {
      headers: {
          Authorization: `token ${accessToken}`,
      },
  })
  .then((response) => {
      if (response.ok) {
          return response.json();
      }
      throw new Error('Network response was not ok.');
  })
  .then((data) => {
      const content = Buffer.from(data.content, 'base64').toString('utf-8');
      const eventsFromCSV = convertStringToCSV(content);

      // Write the CSV data to a file
      writeCSVToFile(eventsFromCSV, writeFilePath);
  })
  .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
  });
};

csvWriter();