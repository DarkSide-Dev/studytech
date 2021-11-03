import React from 'react';
import './App.css';

import {

  BrowserRouter, // Mostra o conteúdo
  Switch, // Define o conteúdo a ser mostrado
  Route, // Define o nome da rota
  Link // Direciona você para outra rota

} from 'react-router-dom'; // Biblioteca de rotas

import Apresentation from './assets/screens/Apresentation';
import Login from './assets/screens/Login';
import Courses from './assets/screens/Courses';

function App() {

  return (

    <BrowserRouter>
    
      <Switch>

        <Route path='/' exact>
          
          <Apresentation />

        </Route>

        <Route path='/login'>
          
          <Login />

        </Route>

        <Route path="/courses">

          <Courses />

        </Route>

      </Switch>

    </BrowserRouter>

  );

}

export default App;