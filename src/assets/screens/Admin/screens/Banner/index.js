import React from 'react';

import {

    Container,
    Menu,
    MenuTitle,
    BannerArea,
    BannerBtn,
    BannerImg,
    BannerItem,
    BannerTitle

} from './style';

import Exemplo from '../../../../img/exemplo.jpg';

const Banner = () => {

    return(

        <Container>

            <Menu>
                <MenuTitle>Banners</MenuTitle>
            </Menu>

            <BannerArea>

                <BannerItem>

                    <BannerTitle>Titulo Banner</BannerTitle>

                    <BannerImg src={Exemplo} />

                    <BannerBtn>Acessar</BannerBtn>

                </BannerItem>

            </BannerArea>

        </Container>

    );

}

export default Banner;