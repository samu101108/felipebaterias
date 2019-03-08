import React, { Component } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Solicitar from './components/Solicitar/Solicitar'
import Sobre from './components/Sobre/Sobre'
import Baterias from './components/Baterias/Baterias'
import Contato from './components/Contato/Contato'
import Footer from './components/Footer/Footer'


import './App.css'

class App extends Component {
  render() {
    return (
      <div>
       <Header/>
       <Hero/>
       <Solicitar/>
       <Sobre/>
       <Baterias/>
       <Contato/>
       <Footer/>
      </div>
    )
  }
}

export default App
