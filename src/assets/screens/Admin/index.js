import React from 'react';

import {

    BrowserRouter, // Mostra o conteúdo
    Switch, // Define o conteúdo a ser mostrado
    Route, // Define o nome da rota
  
} from 'react-router-dom'; // Biblioteca de rotas

import Main from './screens/Main';

import Banner from './screens/Banner';
import BannerAdd from './screens/BannerAdd';
import BannerEdit from './screens/BannerEdit';
import Form from './screens/Form';
import Course from './screens/Courses';
import CourseAdd from './screens/CoursesAdd';
import CourseAddVideo from './screens/CoursesAddVideo';

const App = () => {

    return(

        <BrowserRouter>
    
            <Switch>

                <Route path='/admin' exact>
                
                    <Main />

                </Route>

                <Route path='/admin/banner' exact>
                
                    <Banner />

                </Route>

                <Route path='/admin/banner/add' exact>
                
                    <BannerAdd />

                </Route>

                <Route path='/admin/banner/edit' exact>
                
                    <BannerEdit />

                </Route>

                <Route path='/admin/form' exact>
                
                    <Form />

                </Route>

                <Route path='/admin/courses' exact>
                
                    <Course />

                </Route>

                <Route path='/admin/courses/add' exact>
                
                    <CourseAdd />

                </Route>

                <Route path='/admin/courses/addvideo' exact>
                
                    <CourseAddVideo />

                </Route>

            </Switch>

        </BrowserRouter>        

    );

}

export default App;