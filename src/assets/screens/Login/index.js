import React, { useState } from 'react';

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
    CadastroSubtitle


} from './style';

import EmailImg from '../../img/email-icon.png';
import PasswordImg from '../../img/password-icon.png';
import UserImg from '../../img/name-icon.png';


import FacebookIcon from '../../img/facebookicon.png';
import GoogleIcon from '../../img/googleicon.png';
import LinkedinIcon from '../../img/linkedinicon.png';

function Login(){

    return(

        <Container>

            <AreaFormulario>
            
                <LoginArea>

                    <LoginTitle>Entrar na Plataforma</LoginTitle>

                    <InputArea>
                    
                        <Label>E-mail</Label>
                        <Input icon={EmailImg} type="email" placeholder="Digite seu e-mail" />

                    </InputArea>

                    <InputArea>
                    
                        <Label>Senha</Label>
                        <Input icon={PasswordImg} type="password" placeholder="Digite sua senha" />

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
                        <InputCadastro icon={UserImg} type="text" placeholder="Digite seu nome completo" />

                    </InputAreaCadastro>

                    <InputAreaCadastro>
                
                        <Label>E-mail</Label>
                        <InputCadastro icon={EmailImg} type="email" placeholder="Digite seu e-mail" />

                    </InputAreaCadastro> 

                    <InputAreaCadastro>
                    
                        <Label>Senha</Label>
                        <InputCadastro icon={PasswordImg} type="password" placeholder="Digite sua senha" />

                    </InputAreaCadastro>

                    <InputAreaCadastro>
                    
                        <Label>Confirme sua senha</Label>
                        <InputCadastro icon={PasswordImg} type="password" placeholder="Confirme sua senha" />

                    </InputAreaCadastro>

                    <CadastroButton>Cadastrar</CadastroButton>

                    <CadastroSubtitle>Entre de outra forma</CadastroSubtitle>

                    <SocialMediaArea>

                        <SocialMedia src={FacebookIcon} />

                        <SocialMedia fundo="#fff" src={GoogleIcon} />

                        <SocialMedia fundo="#fff" src={LinkedinIcon} />

                    </SocialMediaArea> 

                </CadastroArea>

            </AreaFormulario>

        </Container>

    );

}

export default Login;