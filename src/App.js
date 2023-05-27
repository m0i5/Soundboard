import logo from './logo.svg';
import tonySound2 from './assets/tonySound2.m4a'


import './App.css';

function App() {

  function play() {
    new Audio(tonySound2).play()
  }

  
  return (
    <div className="App">
      <header className="App-header">
      <p>
        Hi Tony!
      </p>
      <img src="https://fuerstenhaus.li/wp-content/uploads/2021/03/imageteaser_fuerst-1-770x842.jpg" alt="hans-adam" className="App-logo" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}


        <button class="button-23" role="button"
        onClick={play}
        >
        Play Sound</button>
      </header>
      
    </div>
  );
}

export default App;
