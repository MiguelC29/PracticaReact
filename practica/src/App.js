import logo from './logo.svg';
import './App.css';
import MyButton from './componentes/MyButton';
import AboutPage from './componentes/AboutPage';
import List from './componentes/List';
import CounterButton from './componentes/CounterButton';

function App() {
  const ISLOGGEDIN = true;

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
      </div>
      {(ISLOGGEDIN) ? <List /> : <AboutPage />}
    </div>
  );
}

export default App;
