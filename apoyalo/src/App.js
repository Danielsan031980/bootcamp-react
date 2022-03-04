import './App.css';
import Personcard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <Personcard name = "Doe, Jane" age={45} hair="Black"/>
        <Personcard name = "Smith, John" age={88} hair="Brown"/>
    </div>
  );
}

export default App;
