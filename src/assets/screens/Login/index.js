import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

import {

    Container,
    AreaFormulario,
    LoginArea,
    LoginTitle,
    Input,
    Warning,
    LoginButton,
    LoginSubtitle,
    SocialMediaArea,
    SocialMedia,
    Label,
    InputArea,
    CadastroArea,
    CadastroTitle,
    InputAreaCadastro,
    InputCadastro,
    CadastroButton,
    CadastroSubtitle,
    CoverArea,
    CoverTitle,
    CoverDesc,
    CoverButton,
    Destacador,
    FormImage

} from './style';

import EmailImg from '../../img/email-icon.png';
import PasswordImg from '../../img/password-icon.png';
import UserImg from '../../img/name-icon.png';


import FacebookIcon from '../../img/facebookicon.png';
import GoogleIcon from '../../img/googleicon.png';
import LinkedinIcon from '../../img/linkedinicon.png';

import FormImg from '../../img/form.svg';
import FormImg2 from '../../img/form2.svg';

function Login(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [width, setWidth] = useState('50%');
    const [right, setRight] = useState('0%');

    const responseFacebook = (response) => {
        console.log(response);
        alert(response.email);
        alert(response.name);

        // <FacebookLogin
        //         appId="879455436079912"
        //         autoLoad={true}
        //         onClick={componentClicked}
        //         fields="name,email"
        //         scope="public_profile"
        //         callback={responseFacebook} />
    }

    const componentClicked = (response) => {
        console.log(response);
    }

    function showForm(form){        

        if(form == 0){

            setWidth('100%');
            
            setTimeout(() => {

                setName('');
                setEmail('');
                setPassword('');
                setPassword2('');

                setRight('50%');
                setWidth('50%');

            }, 600);

        }
        else{

            setWidth('100%');
            setRight('0%');            
            
            setTimeout(() => {

                setName('');
                setEmail('');
                setPassword('');
                setPassword2('');
                                
                setWidth('50%');

            }, 600);

        }

    }

    return(

        <Container>

            <AreaFormulario>
            
                <LoginArea>                

                    <LoginTitle>Entrar na Plataforma</LoginTitle>

                    <InputArea>
                    
                        <Label>E-mail</Label>
                        <Input onChange={evento => setEmail(evento.target.value)} value={email} icon={EmailImg} type="email" placeholder="Digite seu e-mail" />

                    </InputArea>

                    <InputArea>
                    
                        <Label>Senha</Label>
                        <Input onChange={evento => setPassword(evento.target.value)} value={password} icon={PasswordImg} type="password" placeholder="Digite sua senha" />

                    </InputArea>                    

                    <Warning>Esqueceu a senha?</Warning>

                    <LoginButton>Entrar</LoginButton>

                    <LoginSubtitle>Entre de outra forma</LoginSubtitle>

                    <SocialMediaArea>

                        <SocialMedia src={FacebookIcon} />

                        <SocialMedia fundo="#fff" src={GoogleIcon} />

                        <SocialMedia fundo="#fff" src={LinkedinIcon} />

                    </SocialMediaArea>

                </LoginArea>

                <CadastroArea>

                    <CadastroTitle>
                        Cadastre-se na Plataforma
                    </CadastroTitle>
                   
                    <InputAreaCadastro>
                    
                        <Label>Nome Completo</Label>
                        <InputCadastro onChange={evento => setName(evento.target.value)} value={name} icon={UserImg} type="text" placeholder="Digite seu nome completo" />

                    </InputAreaCadastro>

                    <InputAreaCadastro>
                
                        <Label>E-mail</Label>
                        <InputCadastro onChange={evento => setEmail(evento.target.value)} value={email} icon={EmailImg} type="email" placeholder="Digite seu e-mail" />

                    </InputAreaCadastro> 

                    <InputAreaCadastro>
                    
                        <Label>Senha</Label>
                        <InputCadastro onChange={evento => setPassword(evento.target.value)} value={password} icon={PasswordImg} type="password" placeholder="Digite sua senha" />

                    </InputAreaCadastro>

                    <InputAreaCadastro>
                    
                        <Label>Confirme sua senha</Label>
                        <InputCadastro onChange={evento => setPassword2(evento.target.value)} value={password2} icon={PasswordImg} type="password" placeholder="Confirme sua senha" />

                    </InputAreaCadastro>

                    <CadastroButton>Cadastrar</CadastroButton>

                    <CadastroSubtitle>Entre de outra forma</CadastroSubtitle>

                    <SocialMediaArea>

                        <SocialMedia src={FacebookIcon} />

                        <SocialMedia fundo="#fff" src={GoogleIcon} />

                        <SocialMedia fundo="#fff" src={LinkedinIcon} />

                    </SocialMediaArea> 

                </CadastroArea>

                <CoverArea largura={width} posicao={right}>                    

                    { right == '0%' &&
                        <>
                            <CoverTitle>Não possui uma conta?</CoverTitle>

                            <CoverDesc>Faça seu cadastro de forma rápida e <Destacador>GRATUITA</Destacador></CoverDesc>

                            <CoverButton onClick={() => {showForm(0)}}>Cadastre-se</CoverButton>

                            <FormImage src={FormImg} />
                        </>
                    }

                    { right == '50%' &&
                        <>
                            <CoverTitle>Já possui uma conta?</CoverTitle>

                            <CoverDesc>Faça seu login de forma rápida e <Destacador>prática</Destacador></CoverDesc>

                            <CoverButton onClick={() => {showForm(1)}}>Entrar</CoverButton>

                            <FormImage src={FormImg2} />
                        </>
                    }

                </CoverArea>

            </AreaFormulario>

        </Container>

    );

}

export default Login;