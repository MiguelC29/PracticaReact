import React, { useState } from 'react';
import Menu from '../../componentes/Menu';

export default function Formventas() {

const [valor, setValor] = useState(0);
const contar = () => {
  setValor(valor+1);
}

  return (
    <>
      <div><Menu /></div>
      <br/>
      <div>
        <h4>Form ventas</h4>
        <input type='submit' name='btn' value="Contar" onClick={contar}/>
        <br/>
        {valor}
      </div>
    </>
  )
}
