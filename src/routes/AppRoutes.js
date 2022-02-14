import React from 'react';
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import MenuNavegacion from '../components/MenuNavegacion'
import Hello from '../components/Hello'
import Proyectos from '../components/Proyectos'
 


const AppRoutes = () => {
  return (
      <div>
          <Router >
              <MenuNavegacion />
              <Hello />
              <Proyectos />
                <Routes >
                   
                </Routes>
        </Router>
      </div>

  )
};

export default AppRoutes;