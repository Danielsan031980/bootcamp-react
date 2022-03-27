import './App.css';
import Busqueda from './components/Busqueda';
import React, {useState, useEffect} from 'react';

function App() {
  const [link, setLink] = useState("https://swapi.dev/api/people")
  const [elemento, setElemento] = useState("people")

  useEffect(() => {

}, [link]);

  return (
    <div className="App">   
      <Busqueda setLink={setLink} link={link} setElemento={setElemento} elemento={elemento}/>
    </div>
  );
}

export default App;
