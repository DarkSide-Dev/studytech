import styled from 'styled-components';

export const Container = styled.div`
    background-color: #0553f1;
    height: 100vh;
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

export const MainArea = styled.main`
    background-color: #0553f1;
    display: flex;
    justify-content: space-evenly;
    padding-top: 50px;
`;

export const MainItemArea = styled.div`
    background-color: #a0bbf2;
    width: 250px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    border-radius: 6px;
    cursor: pointer;
`;

export const MainItemImg = styled.img`
    width: 50px;
    margin-bottom: 15px;
`;

export const MainItemTitle = styled.p`
    font-size: 25px;
    font-weight: bold;
    color: #152126;
    margin: 0;
`;

export const Exit = styled.button`
    width: 320px;
    align-self: center;
    margin-top: 150px;
    background-color: inherit;
    font-size: 30px;
    background-color: #de143c;
    border: 2px solid #ccc;
    border-radius: 6px;
    color: #d9d9d9;
    cursor: pointer;
`;