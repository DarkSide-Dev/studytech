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

export const BannerForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #a0bbf2;
    padding: 20px 60px;
    border-radius: 12px;
    max-width: 100vw;
    min-width: 310px;
    box-sizing: border-box;
`;

export const  BannerLabel = styled.label`
    font-size: 25px;
    color: #0553f1;
    font-weight: bold;
    text-shadow: 0 0 2px #ccc;
`;

export const BannerFileLabel = styled.label`
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 10px 0 40px 0;
    background-color: #0553f1;
    color: #fff;
    cursor: pointer;
`;

export const BannerInput = styled.input`
    width: 320px;
    padding: 5px;
    margin-bottom: 40px;
    border-radius: 3px;
    border: 2px solid #0553f1;
    font-size: 20px;
    outline: none;
    display: ${props => props.display};
`;

export const Submit = styled.button`
    width: 100%;
    height: 40px;
    border: 0;
    display: flex;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 30px 0 20px 0;
    background-color: #0553f1;
    color: #fff;
    cursor: pointer;
`;

export const BannerImgPreview = styled.img`
    max-height: 200px;
    max-width: 200px;
    border: 2px solid #fff;
`;