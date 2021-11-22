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

export const BannerInput = styled.input`
    width: 100%;    
    padding: 5px;
    margin-bottom: 40px;
    border-radius: 3px;
    border: 2px solid #0553f1;
    font-size: 20px;
    outline: none;
    display: ${props => props.display};

    @media(max-width: 400px){
        max-width: 200px !important;
    }
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

export const PerguntasTable = styled.table`
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 18px;
    font-family: sans-serif;
    width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.18);
    background-color: #99b4f0;
`;

export const PerguntasTr = styled.tr`
    border-bottom: 1px solid #dddddd;
    color: #0716DB;
    text-shadow: 0 1px 1px #ccc;
    font-weight: bold;

    :nth-of-type(even){
        background-color: #b8caf5;
    }

    :last-of-type{
        border-bottom: 3px solid #0716DB;
        background-color: #0553f1;
        color: #b8caf5;
        text-shadow: 0 1px 1px #222;
        cursor: pointer;
        transition: all ease .2s;

        :hover{
            background-color: #2067fb;
        }
    }
`;

export const PerguntasTd = styled.td`
    padding: 12px 15px;
    max-width: 200px !important;

    :nth-of-type(even){
        text-align: right;
    }
`;

export const Action = styled.img`
    width: 45px;
    margin-right: 2px;
    cursor: pointer;
`;