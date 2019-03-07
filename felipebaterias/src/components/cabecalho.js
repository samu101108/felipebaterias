import React from 'react'
import { Navbar, NavItem } from 'react-materialize'
import  Logo  from '../img/logoFelipe.png'

const cabecalho = () => (
<div>
<Navbar className="green">
      <NavItem href="/" to="/"><img className="logo" src= { Logo }  alt="felipe baterias"/></NavItem>
  </Navbar>
</div>
)

export default cabecalho