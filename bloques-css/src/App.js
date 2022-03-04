
import './App.css';
import Advertisement from './components/Advertisement';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subcontents from './components/Subcontents';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="panel">
          <Navigation/>
           <Main> 
              <Subcontents />
              <Subcontents />
              <Subcontents />
              <Advertisement />
          </Main> 
        </div>
    </div>
  );
}

export default App;
