import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Carros } from './Components/Pages/Carros';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Carros></Carros>
    </div>
  );
}

export default App;
