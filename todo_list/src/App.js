import React, {useState, useEffect} from 'react';
import './App.css';
import Newtodo from './components/Newtodo';
import Todo from './components/ToDo';
import Statustask from './views.js/StatusTask';


function App() {
  const [list, setList] = useState([{
    nombre: "cantar",
    completada: false,
    color: "black"

  }
  ])
  const [erase, setErase] = useState([{
 
  }])

  useEffect(() => {

  }, [list]);



  return (
    <div className="App list">
      <Todo list={list} setList={setList} setErase={setErase} erase={erase}/>
      <Newtodo list={list} setList={setList}/>
      <Statustask erase={erase}/>
    </div>
  );
}

export default App;
