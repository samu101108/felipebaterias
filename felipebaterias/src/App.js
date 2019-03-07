import React, { Component } from 'react'
import Cabecalho from './components/cabecalho'
import Propaganda from './components/propaganda'
import Produtos from './components/produtos'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
       <Cabecalho/>
       <Propaganda/>
       <Produtos/>
      </div>
    )
  }
}

export default App
