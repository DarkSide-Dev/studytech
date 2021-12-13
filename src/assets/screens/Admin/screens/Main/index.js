import React from 'react';

import {

    Container,
    Menu,
    MenuTitle,
    MainArea,
    MainItemArea,
    MainItemImg,
    MainItemTitle,
    Exit

} from './style';

import CourseIcon from '../../../../img/courses.png';
import AdIcon from '../../../../img/advertising.png';
import FormIcon from '../../../../img/formicon.png';

import { useHistory } from 'react-router-dom';

const App = () => {

    let history = useHistory();

    function changeScreen(screen){

        history.push(`/admin/${screen}`);

    }

    return(
                
        <Container>

            <Menu>

                <MenuTitle>Instituto Proa</MenuTitle>

            </Menu>

            <MainArea>

                <MainItemArea onClick={() => {changeScreen('courses')}}>

                    <MainItemImg src={CourseIcon} />

                    <MainItemTitle>Cursos</MainItemTitle>

                </MainItemArea>

                <MainItemArea onClick={() => {changeScreen('banner')}}>

                    <MainItemImg src={AdIcon} />

                    <MainItemTitle>Banners</MainItemTitle>

                </MainItemArea>

                <MainItemArea onClick={() => {changeScreen('form')}}>

                    <MainItemImg src={FormIcon} />

                    <MainItemTitle>Pesquisas</MainItemTitle>

                </MainItemArea>

            </MainArea>

            <Exit>SAIR</Exit>

        </Container>

    );

}

export default App;