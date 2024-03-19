import React from 'react';
import logo from '../logo.svg';
import Saludo from './Saludo';

export const Header = () => {
  return (
    <>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludo />
    </header>
    </>
  )
}
