import React, { useState, useEffect } from 'react';
import { AiOutlineFileText, AiFillFolderAdd, AiOutlineMinusCircle } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';
import tree from './data/tree.json';
import './App.css';

function App() {
  const [data,setData] = useState<object | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(tree);
    },1000)
  },[]);
  
  console.log(data,'=>>> данные');
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
