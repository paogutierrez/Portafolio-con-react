import React from 'react';
import { A, Button, Contenedor, Li, Ul } from '../styles/MenuStyles';
import '../styles/GlobalStyles.css'


const MenuNavegacion = () => {
  return( 
  <Contenedor>
    <Ul>
      <Li><A href="/hello">Hello</A></Li>
      <Li><A href="/proyectos">Proyectos</A></Li>
      <Li><A href="/contacto">Contacto</A></Li>
      <Button >Descargar Curriculum</Button >
    </Ul>
  </Contenedor>)
};

export default MenuNavegacion;