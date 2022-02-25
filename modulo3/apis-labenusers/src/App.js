import './App.css';
import React from 'react'
import Cadastro from './components/cadastro'
import User from './components/users'
import axios from 'axios'

function App () {

  return (
    <div>
      <Cadastro />
      <User />
    </div>
  );
}

export default App;