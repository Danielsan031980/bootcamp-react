import './App.css';
import Busqueda from './components/Busqueda';
import Seleccion from './components/Seleccion';
import React, {useState, useEffect} from 'react';


function App() {
  const [categoria, setCategoria] = useState("https://swapi.dev/api/people")


  useEffect( async () => {

}, [categoria]);

  return (
    <div className="App">
      <Busqueda setCategoria={setCategoria} />
      <Seleccion categoria={categoria}/>
    </div>
  );
}

export default App;
