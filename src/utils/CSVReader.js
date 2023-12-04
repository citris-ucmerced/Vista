import Papa from "papaparse";

const config = {
  download: true,
  header: true,
  delimiter: ",",
  skipEmptyLines: true,
};

const readCSV = (file, setData) => {
  Papa.parse(file, {
    ...config,
    complete: (results) => {
      setData(results.data);
    },
  });
};

const getRowByTitle = (file, slug, setData) => {
  let stopParsing = false;

  const toSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/['":,.]/g, '')  
      .replace(/ /g, '-')       
      .replace(/[^\w-]+/g, ''); 
  };

  Papa.parse(file, {
    ...config,
    step: (results) => {
      const row = results.data;
      if (row.title && toSlug(row.title) === slug) {
        setData(row);
        stopParsing = true;
      }

      if (stopParsing) {
        return;
      }
    },
  });
  return () => {
    stopParsing = true;
  };
};


const getRowById = (file, id, setData) => {

  let stopParsing = false;

  Papa.parse(file, {
    ...config,
    step: (results) => {
      const row = results.data;
      if(row.urlSafeTitle === id){
        setData(row);
        stopParsing = true
      }
      if(row.description)

      if (stopParsing){
        return;
      }
    }
  });

  return () => {
    stopParsing = true;
  }
};
function parseDescription(description) {
  // Split the description into paragraphs based on the '\n' marker
  return description.split('\n').map((paragraph) => paragraph.trim());
}

const readCSVSortedByColumn = (file, catagory, setData)=>{
  const data = {
    keys: [],
    dataByCategory:{
    }
  };

  Papa.parse(file, {
    ...config,
    step: (results) => {
      const key = results.data[catagory];
      const description = results.data['description']; // Assuming 'description' is the column name
      // const value = results.data;
      const value = { ...results.data, description: parseDescription(description) };

      if(!(data.keys.includes(key))){
        data.keys.push(key);
        data.dataByCategory[key] = [];
      }
      data.dataByCategory[key].push(value);
    },
    complete: (results) => {
      setData(data);
    },
  })
}

export {readCSV, getRowById, getRowByTitle, readCSVSortedByColumn};
