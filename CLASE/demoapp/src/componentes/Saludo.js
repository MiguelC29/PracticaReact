import React, { useState } from 'react';

export default function Saludo() {

  const [name, setName] = useState("Miguel Casallas")

  const cambiarNombre = (newName) => {
    setName(newName)
  }
  
  return (
    <div>
      <h6 className={name.length >= 4 ? 'verde' : 'rojo'}>{name}</h6>
      <input type='text' onChange={e => cambiarNombre(e.target.value)} placeholder='Cambiar nombre' />
    </div>
  )
}