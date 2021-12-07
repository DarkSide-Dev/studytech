import React, { useState } from 'react';
import UserIcon from '../../img/icon-user.png';
import DownIcon from "../../img/down-icon.svg";
import VideoPlayer from 'react-video-js-player';
import Player from '../../img/trailer_hd.mp4';
import "./Video.css"

import {

    Container,
    Header,
    Title,
    NavUserArea,
    NavList,
    NavItem,
    UserImg,
    NavUser,
    AreaCurso,
    AreaVideo,
    VideoTitle,
    AreaGuia,
    GuiaTitle,
    Sidebar,
    AulaItem,
    Down,
    FaseArea,
    Description

} from './style.js';

function Aulas() {

    const [showConfig, setShowConfig] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const [display, setDisplay] = useState('none');

    function showMenu(){
        
        if(showConfig){

            setOpacity(0);

            setTimeout(() => {
                setDisplay('none');
            }, 300);

        }
        else{

            setDisplay('block');

            setTimeout(() => {                
                setOpacity(1);
            }, 300);

        }

        setShowConfig(!showConfig);
        
    }


    function showAulas(){
        
    }

    const videoSrc = Player;
    const poster = "https://www.impacta.com.br/blog/wp-content/uploads/2021/03/excel_365.png";

    return (

        <Container>

            <Header>

                <Title> Study Tech </Title>

                <NavUserArea>

                    <UserImg onClick={showMenu} src={UserIcon} />
                    
                    <NavUser onClick={showMenu}>Gabriel Prado</NavUser>

                    <NavList opacity={opacity} display={display}>


                         <NavItem> Configurações </NavItem>

                        <NavItem> Sair </NavItem>

                    </NavList>

                </NavUserArea>

            </Header>

            <AreaCurso>
            
                <AreaVideo>
                    
                    <VideoTitle>Microsoft Excel 2010</VideoTitle>
                
                    <VideoPlayer src={videoSrc} poster={poster} width= "750" height= "500"/>
                    
                    <Description>
                            Você poderá aprofundar ainda mais seus conhecimentos a partir de temas que o ajudarão a desenvolver uma planilha dinâmica com aparência profissional ou até mesmo a resolver problemas com funções e recursos do programa.
                            Com este curso, você aprenderá a usar funções, trabalhar com proteção de planilhas, validar dados para padronizá-los, criar macros para executar comandos automaticamente e, por fim, criar formulários para melhor visualização dos dados.
                    </Description>
                </AreaVideo>

                <AreaGuia>
                    
                    <FaseArea>
                    
                        <GuiaTitle onClick={showAulas}> Iniciantes</GuiaTitle>  
                        <Down src={DownIcon} onClick={showAulas}/>
                    
                    </FaseArea>
                    
                    <Sidebar>

                        <AulaItem>Aula 1: Introdução </AulaItem>
                        <AulaItem>Aula 2: Formatando Células</AulaItem>
                        <AulaItem>Aula 3: Operações Matemáticas</AulaItem>
                        <AulaItem>Aula 4: Gráficos e Média</AulaItem>
                        <AulaItem>Aula 5: Revisão</AulaItem>

                    </Sidebar>
                    
                    <FaseArea>
                    
                        <GuiaTitle onClick={showAulas}> Intermediário </GuiaTitle>
                        <Down src={DownIcon} onClick={showAulas}/>
                    
                    </FaseArea>
                    
                    <Sidebar>

                        <AulaItem>Aula 1: Trabalhando com Condições </AulaItem>
                        <AulaItem>Aula 2: Validação de Células /Operação com datas </AulaItem>
                        <AulaItem>Aula 3: Trabalhando com Índices</AulaItem>
                        <AulaItem>Aula 4: Media, Meridiana, Desvio</AulaItem>
                        <AulaItem>Aula 5: Matriz</AulaItem>

                    </Sidebar>

                </AreaGuia>
            
            </AreaCurso>


        </Container>
    );
}
export default Aulas;