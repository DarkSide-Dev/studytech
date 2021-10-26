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
    CadastroArea

} from './style';

import EmailImg from '../../img/email-icon.png';
import PasswordImg from '../../img/password-icon.png';

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

                   

                </CadastroArea>

            </AreaFormulario>

        </Container>

    );

}

export default Login;