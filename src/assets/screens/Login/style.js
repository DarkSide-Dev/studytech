import styled from 'styled-components';

export const Container = styled.div`
    background-color: #2b72ff;
    width: 100vw;
    min-height: 100vh;
    max-height: auto;
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

    @media(max-width: 785px){
        padding: 0 10px;
        box-sizing: border-box;
        min-height: 100vh;
        max-height: auto;
        border-radius: 0;
        flex-direction: column;
    }
`;

export const LoginArea = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    @media(max-width: 785px){
        display: ${props => props.mostrar?"flex":"none"};
        justify-content: flex-start;
        padding-top: 20px;
    }
`;

export const LoginTitle = styled.h1`
    font-size: 30px;
    color: #01017c;
    text-shadow: 0 0 1px black;

    @media(max-width: 785px){
        font-size: 25px;
    }
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

    @media(max-width: 785px){
        width: 250px;
    }

    
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
    padding-bottom: 2px;
    color: #01017c;
    font-weight: bold;
    overflow-y: hidden;
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
    overflow-y: hidden;
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

    @media(max-width: 785px){
        display: ${props => props.mostrar?"flex":"none"};
        justify-content: flex-start;
        padding-top: 20px;
    }
`;

export const CadastroTitle = styled.h1`
    font-size: 25px;
    color: #01017c;
    text-shadow: 0 0 1px black;
    margin-bottom: 25px;

    @media(max-width: 785px){
        font-size: 22px;
        padding-top: 10px;
        overflow-y: hidden;
    }
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

    @media(max-width: 785px){
        width: 250px;
        height: 30px;
    }

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
    overflow-y: hidden;
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

    @media(max-width: 785px){
        display: none;
    }
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

export const ToggleArea = styled.div`
    display: none;
    width: 100%;
    justify-content: space-evenly;

    @media(max-width: 785px){
        width: 250px;
        display: flex;
    }
`;

export const ToggleButton = styled.button`
    background-color: transparent;
    border: 0;
    font-size: 17px;
    color: #0050f4;
    font-weight: bold;
    position: relative;
    overflow: visible;
    padding-bottom: 6px;
    text-shadow: 1px 0 1px black;
        
    ::after{
        content: " ";
        position: absolute;
        width: 100%;
        background-color: #01017c;
        height: ${props => props.mostrar};
        left: 0;
        bottom: 0;
    }

`;

export const CoverAreaM = styled.div`
    width: 100vw;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2b72ff;
    left: ${props => props.left};
    transition: all ease-in-out 1s;
`;

export const LogoImg = styled.img`
    height: 50%;
    border: 3px solid #d9d9d9;
`;