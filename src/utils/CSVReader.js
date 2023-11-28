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

      if (stopParsing){
        return;
      }
    }
  });

  return () => {
    stopParsing = true;
  }
};

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

export {readCSV, getRowById, readCSVSortedByColumn};
