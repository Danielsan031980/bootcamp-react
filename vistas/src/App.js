
import './App.css';
import React, {useState, useEffect} from 'react';
import Selector from './components/Selector';
import Viewelected from './views/Viewelected';

function App() {
 
  const [pestana, setPestana] = useState(
    {
        view1: true,
        view2: false,
        view3: false,
    }
)


useEffect(() => {
  console.log(pestana);
     
 }, [pestana]);

  return (
    <div className="App">
      <Selector setPestana={setPestana}/>
      <Viewelected pestana={pestana} />
      
    </div>
  );
}

export default App;
