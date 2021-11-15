import React from 'react';

import {

    BrowserRouter, // Mostra o conteúdo
    Switch, // Define o conteúdo a ser mostrado
    Route, // Define o nome da rota
  
} from 'react-router-dom'; // Biblioteca de rotas

import Main from './screens/Main';

import Banner from './screens/Banner';

const App = () => {

    return(

        <BrowserRouter>
    
            <Switch>

                <Route path='/admin' exact>
                
                    <Main />

                </Route>

                <Route path='/admin/banner'>
                
                    <Banner />

                </Route>

            </Switch>

        </BrowserRouter>        

    );

}

export default App;