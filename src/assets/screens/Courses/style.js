import styled from "styled-components";

export const Curso = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.color};
    border-radius: 15px;
    min-height: 170px;
    margin: 0 7px;
    flex: 1;
    width: 320px;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 10px;
`;

export const AreaImagem = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

export const CursoImagem = styled.img`
    width: 100px;
    background-color: white;
    border-radius: 11px;
    border: 2px solid #fff;
`;

export const AreaInfo = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
`;

export const CursoTitle = styled.h3`
    color: white;
    font-weight: bold;
    font-size: 35px;

    @media(max-width: 800px){
        font-size: 25px;
    }
`;

export const ProgressBar = styled.progress`
    
`;

export const CursoBtn = styled.button`
    :hover{
        background-color: #ddd !important;
    }
`;

export const CursoArea = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
    background-color: red;
`;