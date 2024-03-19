import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './componentes/Header';
import ListPersonas from './page/personas/ListPersonas';
import Formventas from './page/ventas/Formventas';


function App() {
  return (
    <>
    <div>
      < Header />
    </div>

    <div className="App">
      <Routes>
        <Route path='/' element = {<ListPersonas />}/>
        <Route path='Ventas' element = {<Formventas />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
