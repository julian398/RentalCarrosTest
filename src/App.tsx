import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar.tsx';
import { Carros } from './Components/Pages/Carros.tsx';
import { Inicio } from './Components/Pages/Inicio.tsx';
import { Contacto } from './Components/Pages/Contacto.tsx';
import { Carro } from './Components/Pages/CarDetails/Carro.tsx';


const App: React.FC = () => {
  let Component = Inicio
  switch (window.location.pathname){
    case "/Inicio":
      Component = Inicio
      break
    case "/Carros":
      Component = Carros
      break
    case "/Contacto":
      Component = Contacto
      break
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Component></Component>
    </div>
  );
}

export default App;
