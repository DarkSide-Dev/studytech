import React, { useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { useLocation } from 'react-router';

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
    FormImage,
    ToggleArea,
    ToggleButton,
    CoverAreaM,
    LogoImg

} from './style';

import EmailImg from '../../img/email-icon.png';
import PasswordImg from '../../img/password-icon.png';
import UserImg from '../../img/name-icon.png';


import FacebookIcon from '../../img/facebookicon.png';
import GoogleIcon from '../../img/googleicon.png';
import LinkedinIcon from '../../img/linkedinicon.png';

import FormImg from '../../img/form.svg';
import FormImg2 from '../../img/form2.svg';

import Logo from '../../img/logo.png';

function Login(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [width, setWidth] = useState('50%');
    const [right, setRight] = useState('0%');
    const [left, setLeft] = useState('100%');

    const [show, setShow] = useState(true);

    let query = useQuery();
    let code = query.get('code');

    useEffect( () => {        
        
        if(code){
            GetUrlTokenLinkedin();
        }

    },[]);

    const GetUserFacebook = (response) => {
        console.log(response);
        setEmail(response.email);
        setName(response.name);
    }

    function GetUserGoogle(info){
        console.log(info);
        setName(info.profileObj.name);
        setEmail(info.profileObj.email);
    }

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }    

    async function GetUrlTokenLinkedin(){

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'cors'
        };
        
        const response = await fetch(`https://frozen-thicket-56741.herokuapp.com/https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${code}&client_id=86rufsqy7ofjdo&client_secret=OAtxndtqpPfDCRRn&redirect_uri=http://localhost:3000/login`, requestOptions);

        const content = await response.json();

        GetUserLinkedin(content);

    }

    async function GetMailLinkedin(token){

        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token.access_token}`
            }
        };

        console.log(requestOptions);
        
        const response = await fetch(`https://frozen-thicket-56741.herokuapp.com/https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))`, requestOptions);

        const content = await response.json();


        setEmail(content.elements[0].["handle~"].emailAddress);

    }

    async function GetUserLinkedin(token){

        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token.access_token}`
            }
        };

        console.log(requestOptions);
        
        const response = await fetch(`https://frozen-thicket-56741.herokuapp.com/https://api.linkedin.com/v2/me`, requestOptions);

        const content = await response.json();
    
        console.log(content);

        let c_name = `${content.localizedFirstName} ${content.localizedLastName}`;

        console.log(c_name);

        setName(c_name);

        GetMailLinkedin(token);

    }
    
    async function GetTokenLinkedin(){

        window.location = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&scope=r_liteprofile%20r_emailaddress&client_id=86rufsqy7ofjdo&redirect_uri=http://localhost:3000/login';
        
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

    function mudarFormulario(){
        if(show){

            setLeft('-100%');
            
            setTimeout(() => {
                setShow(!show);
            }, 500);

        }
        else{

            setLeft('100%');
            
            setTimeout(() => {
                setShow(!show);
            }, 500);

        }
    }    

    return(

        <Container>

            <AreaFormulario>
            
                <LoginArea mostrar={show}>

                    <ToggleArea>

                        <ToggleButton mostrar="3px">
                            Login
                        </ToggleButton>

                        <ToggleButton onClick={mudarFormulario} mostrar="0">
                            Cadastro
                        </ToggleButton>

                    </ToggleArea>

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

                        <FacebookLogin
                            appId="1290080341430656"
                            autoLoad={true}
                            fields="name,email"
                            scope="public_profile"
                            callback={GetUserFacebook}
                            render={renderProps => (<SocialMedia onClick={renderProps.onClick} src={FacebookIcon} />)}
                        />

                        <GoogleLogin
                            clientId="266649578627-h98qn2uekie7u51b68dsk0hmt24o0vvt.apps.googleusercontent.com"
                            buttonText="CLICA AI MANO"
                            onSuccess={GetUserGoogle}
                            onFailure={GetUserGoogle}
                            cookiePolicy={'single_host_origin'}
                            render={renderProps => (<SocialMedia onClick={renderProps.onClick} fundo="#fff" src={GoogleIcon} />)}
                        />                        

                        <SocialMedia onClick={GetTokenLinkedin} fundo="#fff" src={LinkedinIcon} />

                    </SocialMediaArea>

                </LoginArea>

                <CadastroArea mostrar={!show}>

                    <ToggleArea>

                        <ToggleButton mostrar="0" onClick={mudarFormulario}>
                            Login
                        </ToggleButton>

                        <ToggleButton mostrar="3px">
                            Cadastro
                        </ToggleButton>

                    </ToggleArea>

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
                        
                        <FacebookLogin
                            appId="1290080341430656"
                            autoLoad={true}
                            fields="name,email"
                            scope="public_profile"
                            callback={GetUserFacebook}
                            render={renderProps => (<SocialMedia onClick={renderProps.onClick} src={FacebookIcon} />)}
                        />

                        <GoogleLogin
                            clientId="266649578627-h98qn2uekie7u51b68dsk0hmt24o0vvt.apps.googleusercontent.com"
                            buttonText="CLICA AI MANO"
                            onSuccess={GetUserGoogle}
                            onFailure={GetUserGoogle}
                            cookiePolicy={'single_host_origin'}
                            render={renderProps => (<SocialMedia onClick={renderProps.onClick} fundo="#fff" src={GoogleIcon} />)}
                        />                        

                        <SocialMedia onClick={GetTokenLinkedin} fundo="#fff" src={LinkedinIcon} />

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

                <CoverAreaM left={left}>
                    <LogoImg src={Logo} />
                </CoverAreaM>

            </AreaFormulario>

        </Container>

    );

}

export default Login;