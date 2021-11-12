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

const App = () => {

    return(
                
        <Container>

            <Menu>

                <MenuTitle>Instituto Proa</MenuTitle>

            </Menu>

            <MainArea>

                <MainItemArea>

                    <MainItemImg src={CourseIcon} />

                    <MainItemTitle>Cursos</MainItemTitle>

                </MainItemArea>

                <MainItemArea>

                    <MainItemImg src={AdIcon} />

                    <MainItemTitle>Banners</MainItemTitle>

                </MainItemArea>

                <MainItemArea>

                    <MainItemImg src={FormIcon} />

                    <MainItemTitle>Pesquisas</MainItemTitle>

                </MainItemArea>

            </MainArea>

            <Exit>SAIR</Exit>

        </Container>

    );

}

export default App;