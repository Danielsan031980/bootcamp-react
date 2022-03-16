import Box from './componentes/Box';
import Boxes from './views/Boxes';
import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [caja, setCaja] = useState ();
  const [cajas, setCajas] = useState();  


  useEffect(() => {
  
    }, [caja, cajas]);

  return (
    <div className="App">
        <Box caja = {caja} setCaja = {setCaja} cajas={cajas} setCajas={setCajas} />
        <Boxes cajas = {cajas}/>
    </div>
  );
}

export default App;
