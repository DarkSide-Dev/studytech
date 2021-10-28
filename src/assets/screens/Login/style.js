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
    position: relative;
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

    
    :focus{
        background-color: #eee;
    }
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

export const CadastroTitle = styled.h1`
    font-size: 25px;
    color: #01017c;
    text-shadow: 0 0 1px black;
    margin-bottom: 25px;
`;

export const InputAreaCadastro = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputCadastro = styled.input`
    width: 300px;
    height: 23px;
    outline: none;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 2px solid #0d378c;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    background-size: 25px;
    background-position-y: center;
    background-position-x: 3px;
    padding: 5px 0 5px 30px;
    font-size: 15px;

    :focus{
        background-color: #eee;
    }
`;

export const CadastroButton = styled.button`
    width: auto;
    font-size: 17px;
    background-color: #2b72ff;
    border-radius: 15px;
    border: 2px solid #01017c;
    padding: 5px 25px;
    color: #fff;
    font-weight: bold;
    margin-top: 15px;
`;

export const CadastroSubtitle = styled.p`
    margin-top: 25px;
    color: #01017c;
`;

export const CoverArea = styled.div`
    position: absolute;
    width: ${props => props.largura};
    height: 100%;
    background-color: #01017c;
    transition: all .7s ease;
    right: ${props => props.posicao};
    display: flex;
    flex-direction: column;
    align-items: center;
`;
    
export const CoverTitle = styled.h2`
    color: #d9d9d9;
    font-size: 30px;
    text-align: center;
    margin: 80px 0 20px 0;
`;

export const CoverDesc = styled.p`
    color: #d9d9d9;
    font-size: 20px;
    width: 85%;
    text-align: center;
`;

export const CoverButton = styled.button`
    font-size: 18px;
    background-color: inherit;
    border: 2px solid #2b72ff;
    padding: 5px 20px;
    border-radius: 20px;
    color: #d9d9d9;
    margin-top: 10px;
    transition: all ease .3s;
    font-weight: bold;

    :hover{
        background-color: #9db7ed;
        border-color: #9db7ed;
        color: #000;
        cursor: pointer;
        font-weight: bold;
    }
`;

export const Destacador = styled.span`
    font-weight: bold;
`;

export const FormImage = styled.img`
    width: 240px;
    position: absolute;
    bottom: 15px;
    align-self: center;
`;