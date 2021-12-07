import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #0553f1;
    display: flex;
    flex-direction: column;
`;

export const Menu = styled.div`
    width: 100vw;
    height: 50px;
    border-bottom: 2px solid #a0bbf2;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MenuTitle = styled.h2`
    font-size: 30px;
    margin: 0;
    color: #ddd;
    text-shadow: 0 0 10px #152126;
`;

export const BannerArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 30px;
    justify-content: space-evenly;
`;

export const BannerItem = styled.div`
    background-color: #a0bbf2;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 220px;
    border-radius: 7px;
    border: 2px solid #fff;
    padding: 5px;
    align-items: center;
    justify-content: space-between;
`;

export const BannerImg = styled.img`
    width: 200px;
    max-height: 130px;
    border: 2px solid #0553f1;
    border-radius: 4px;
`;

export const BannerImgAdd = styled.img`
    width: 100px;
    max-height: 100px;
    margin: auto;
    cursor: pointer;
`;

export const BannerBtn = styled.button`
    font-size: 17px;
    background-color: #0553f1;
    color: #fff;
    border: 2px solid #a0bbf2;
    padding: 5px 20px;
    border-radius: 7px;
    cursor: pointer;
    transition: all ease .3s;

    :hover{
        background-color: #a0bbf2;
        color: #0553f1;
        border-color: #0553f1;
    }
`;

export const BannerTitle = styled.h2`
    margin: 0;
    text-align: center;
    color: #152126;
`;