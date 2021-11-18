import React, { useState } from 'react';
import UserIcon from '../../img/icon-user.png';

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
    GuiaTitle2,
    AulasList,
    AulaItem,


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
                
                </AreaVideo>

                <AreaGuia>
                    
                    <GuiaTitle>Iniciantes</GuiaTitle>

                    <AulasList>

                        <AulaItem>Aula 1: Introdução </AulaItem>
                        <AulaItem>Aula 2: Formatando Células</AulaItem>
                        <AulaItem>Aula 3: Operações Matemáticas</AulaItem>
                        <AulaItem>Aula 4: Gráficos e Média</AulaItem>
                        <AulaItem>Aula 5: Revisão</AulaItem>

                    </AulasList>

                    <GuiaTitle2>Intermediário</GuiaTitle2>

                    <AulasList>

                        <AulaItem>Aula 1: Trabalhando com Condições </AulaItem>
                        <AulaItem>Aula 2: Validação de Células /Operação com datas </AulaItem>
                        <AulaItem>Aula 3: Trabalhando com Índices</AulaItem>
                        <AulaItem>Aula 4: Media, Meridiana, Desvio</AulaItem>
                        <AulaItem>Aula 5: Matriz</AulaItem>

                    </AulasList>

                </AreaGuia>
            
            </AreaCurso>


        </Container>
    );
}
export default Aulas;