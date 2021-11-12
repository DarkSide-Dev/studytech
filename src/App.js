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
import Admin from './assets/screens/Admin';

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

        <Route path="/admin">

          <Admin />

        </Route>

      </Switch>

    </BrowserRouter>

  );

}

export default App;