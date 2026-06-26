import React, { createContext } from 'react';

export const DataContext = createContext();

function DataProvider({ children }) {
    
    const products = {
        name : "laptop"

    }

    const Projects = [
        {
            projectsName : "Nan mudhalvan",
            year : "1-year"

        },
        {
            projectsName : "Nan mudhalvan",
            year : "2-year"

        },
                {
            projectsName : "Nan mudhalvan",
            year : "3-year"

        },
                {
            projectsName : "Nan mudhalvan",
            year : "4-year"

        },
    ]

  const me = "swetha"

  const myBestFrined = "swathi"

  const array  = [0 , 2 , 3 , 4 , 5]


  const data = {products ,me,myBestFrined ,array ,Projects}; 

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;

