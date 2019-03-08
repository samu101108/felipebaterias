import React from 'react'

const Header = () => (
<div>
  <div class="navbar-fixed">
        <nav class="green darken-4">
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo"><img src="../../../src/img/logoFelipe.png" alt="logotipo"/></a>
            <a href="#" data-target="mobile-nav" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
                <li><a href="#solicitar">Solicitar</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#baterias">Baterias</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
        </nav>
      </div>
{/*
  /src/img/logoFelipe.png
  src/components/Header/Header.jsx
      <div>
        <ul class="sidenav" id="mobile-nav">
          <li><a href="#solicitar">Solicitar</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#baterias">Baterias</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
  */}
    </div>
)

export default Header
