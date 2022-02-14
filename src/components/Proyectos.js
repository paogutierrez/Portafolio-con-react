import React from 'react';
import { Card } from 'react-bootstrap';
import { H2 } from '../styles/HelloStyles';
import {DivContenedor, Pa} from '../styles/ProyectosStyles'
import '../styles/proyectos.css'

const Proyectos = () => {

  return (<DivContenedor>


<H2>Parece magia, funciona con código.</H2>
<Pa>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</Pa>

<Card className="bg-dark text-white">
  <Card.Img  className="imagen" src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1644121234/peliculas_fbqs7h.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title className='letras'>Aplicacion de peliculas</Card.Title>
    <Card.Text className='letras'>
     Inicios en programacion
    </Card.Text>
    <Card.Text className='letras'> Check</Card.Text>
  </Card.ImgOverlay>
</Card>


<Card className="bg-dark text-white">
  <Card.Img  className="imagen" src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1644121234/api_ueuikd.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title className='letras'>Consumo de API</Card.Title>
    <Card.Text className='letras'>
     Inicios en programacion
    </Card.Text>
    <Card.Text className='letras'> Check</Card.Text>
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img  className="imagen"  src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1644121234/buena_vista_lmh9v1.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title className='letras'>Fanpage</Card.Title>
    <Card.Text className='letras' >
     Inicios en programacion
    </Card.Text>
    <Card.Text className='letras'> Check</Card.Text>
  </Card.ImgOverlay>
</Card>

  </DivContenedor>);
};

export default Proyectos;
