import React, { useState, useEffect } from 'react';
import { Folder } from './components/business/Folder/Folder';
import tree from './data/tree.json';
import { IChild } from './models/models';
import './App.css';

function App() {
  const [data,setData] = useState<IChild | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(tree);
    },1000)
  },[]);
  
  return (
    <div className="App">
      <h2>Create React App Tree</h2>
      <div className='tree_container'>
        <div className='tree_root_node'>
          <Folder data={data} root={true}/>
        </div>
      </div>
    </div>
  );
}

export default App;
