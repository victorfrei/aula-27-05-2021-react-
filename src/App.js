
import logo from './logo.svg';
import './App.css';

 //function ou uma class

 //objetos
const a=[1,2,3];
const b={a:1,b:"a",c:'M'}

function detector(a){

  if(a){
    return true
  }else{
     return false
    }

}




function App() {
  return (
    //jsx
    // variavel? true:false
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
}

export default App;
