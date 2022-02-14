import React from 'react';
import {ConHello, H1, H2, Img, P} from '../styles/HelloStyles'
import '../styles/GlobalStyles.css'



const Home = () => {
  return (
    <ConHello >
        <H1>¡Hola a todos!</H1>
        <H2>Soy Paola Gutierrez</H2>
        <P> Web Developer, apasionada por la innovacion y <br></br>diseño de nuevas tendencias tecnologicas,<br></br> actualmente estudiante de academia Geek</P>
            <div>
                <Img alt=""src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1644809638/WhatsApp_Image_2022-02-13_at_10.33.42_PM_mzlpkl.jpg" width="350" height="420"></Img>
            </div>     
    </ConHello >
  )
};

export default Home;
