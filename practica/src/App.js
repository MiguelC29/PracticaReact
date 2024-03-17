import logo from './logo.svg';
import './App.css';
import MyButton from './componentes/MyButton';
import AboutPage from './componentes/AboutPage';
import List from './componentes/List';
import CounterButton from './componentes/CounterButton';
import SimultaneousCounterButton from './componentes/SimultaneousCounterButton';
import { useState } from 'react';

function App() {
  const ISLOGGEDIN = true;

  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <div>
        <MyButton /><br/>
        <h1>Contadores que se actualizan separadamente</h1>
        <CounterButton />
        <br/>
        <CounterButton />
        <br/>
        <h1>Contadores que se actualizan juntos</h1>
        <SimultaneousCounterButton count={count} onClick={incrementCount}/>
        <br/>
        <SimultaneousCounterButton count={count} onClick={incrementCount}/>
      </div>
      {(ISLOGGEDIN) ? <List /> : <AboutPage />}
    </div>
  );
}

export default App;
