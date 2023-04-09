import React ,{ createContext, useState } from 'react'

export const store = createContext();
const Context = (props) => {
    
const[data, setData] = useState([
  {name: 'John', age: 24, course: 'MERN', batch: 'October'},
  {name: 'Deo', age: 25, course: 'MERN', batch: 'November'},
  {name: 'Biden', age: 26, course: 'MERN', batch: 'September'},
  {name: 'Chirst', age: 23, course: 'MERN', batch: 'October'},
  {name: 'Elent', age: 24, course: 'MERN', batch: 'November'},
]);

  return (
    <div>
      <store.Provider value={{data, setData}}>
        {props.children}
      </store.Provider>
  
    </div>
  )
}

export default Context
