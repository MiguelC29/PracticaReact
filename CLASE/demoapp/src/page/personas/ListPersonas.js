import React, { useState } from 'react';
import Menu from '../../componentes/Menu';

export default function ListPersonas() {

  const initPeople = [
    {
      id: 1,
      name: "Miguel",
      lastName: "Casallas"
    },
    {
      id: 2,
      name: "Diego",
      lastName: "Boada"
    },
    {
      id: 3,
      name: "Angel",
      lastName: "Poveda"
    }
  ];

  const [people, setPeople] = useState(initPeople);
  // const createData = (data) => {
  //   setDd([...db, data]);
  // }

  return (
    <>
    <div><Menu /></div>
    <br/>
    <h3>List Personas</h3>
    <div>
      <table className='table'>
        <thead className='t-head'>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody className='t-body'>
          {people.length > 0 ? (
            people.map((el) =>(
              <>
              <tr>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.lastName}</td>
              </tr>
              </>
            ))
          ) : (
            <tr>
              <td>No hay datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  )
}
