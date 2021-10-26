import styled from 'styled-components';

export const Container = styled.div`
    background-color: #2b72ff;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AreaFormulario = styled.div`
    width: 800px;
    height: 600px;
    background-color: #a0bbf2;
    display: flex;
    border-radius: 30px;
`;

export const LoginArea = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
`;

export const LoginTitle = styled.h1`
    font-size: 30px;
    color: #01017c;
    text-shadow: 0 0 1px black;
`;

export const Input = styled.input`
    width: 300px;
    height: 30px;
    outline: none;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 2px solid #0d378c;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    background-size: 30px;
    background-position-y: center;
    background-position-x: 3px;
    padding: 5px 0 5px 35px;
    font-size: 17px;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Warning = styled.p`
    margin: 0;
    color: #01016d;
    font-weight: bold;
`;

export const Label = styled.label`
    margin-bottom: 2px;
    color: #01017c;
    font-weight: bold;
`;

export const LoginButton = styled.button`
    width: auto;
    font-size: 17px;
    background-color: #2b72ff;
    border-radius: 15px;
    border: 2px solid #01017c;
    padding: 5px 25px;
    color: #fff;
    font-weight: bold;
    margin-top: 25px;
`;

export const LoginSubtitle = styled.p`
    margin-top: 60px;
    color: #01017c;
`;

export const SocialMediaArea = styled.div`
`;

export const SocialMedia = styled.img`
    width: 40px;
    height: 40px; 
    border-radius: 50%;
    margin: 0 5px;
    background-color: ${props => props.fundo?props.fundo:"transparent"};
`;

export const CadastroArea = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
`;