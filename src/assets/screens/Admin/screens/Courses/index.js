import React from 'react';
import { useHistory } from 'react-router-dom';

import {

    Container,
    Menu,
    MenuTitle,
    BannerArea,
    BannerBtn,
    BannerImg,
    BannerItem,
    BannerTitle,
    BannerImgAdd

} from './style';

import Exemplo from '../../../../img/drive.png';
import Exemplo2 from '../../../../img/kisspng-trello-logo-slack-atlassian-trello-5b2bcdc8b0e154.9936644115295973847245.png';
import AddIcon from '../../../../img/add.png';

const Banner = () => {

    let history = useHistory();

    function changeScreen(screen){

        history.push(`/admin/courses/${screen}`);

    }

    return(

        <Container>

            <Menu>
                <MenuTitle>Painel de Cursos</MenuTitle>
            </Menu>

            <BannerArea>                

                <BannerItem>

                    <BannerTitle>Drive</BannerTitle>

                    <BannerImg src={Exemplo} />

                    <BannerBtn onClick={() => {changeScreen('addvideo')}}>Acessar</BannerBtn>

                </BannerItem>

                <BannerItem>

                    <BannerTitle>Trello</BannerTitle>

                    <BannerImg src={Exemplo2} />

                    <BannerBtn>Acessar</BannerBtn>

                </BannerItem>

                <BannerItem onClick={() => {changeScreen('add')}}>

                    <BannerImgAdd src={AddIcon} />

                </BannerItem>

            </BannerArea>

        </Container>

    );

}

export default Banner;