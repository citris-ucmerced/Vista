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

const readCSVSortedByColumn = (file, catagory, setData)=>{
  const data = {
    keys: [],
    dataByCategory:{
    }
  };

  Papa.parse(file, {
    ...config,
    step: (results)=>{
      const key = results.data[catagory];
      const value = results.data;
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

export {readCSV, readCSVSortedByColumn};
