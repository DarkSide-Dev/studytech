import React, { useState } from 'react';

import Banner from '../../img/undraw_professor_8lrt.svg';
import WppBussiness from '../../img/whatsapp-business-34.png';
import Linkedin from '../../img/174857.png';
import Trello from '../../img/kisspng-trello-logo-slack-atlassian-trello-5b2bcdc8b0e154.9936644115295973847245.png';
import Excel from '../../img/excel-logo.png';

import User from '../../img/user.png';
import Logo from '../../img/logo.png';

import {

    Header,
    Title,
    Cadastro,
    OutlineButton,
    Container,
    Main,
    MainImgArea,
    MainTextArea,
    Badge,
    Message,
    TextArea,
    TitleIntroduction,
    Description,
    SolidButton,
    BannerImg,
    Section,
    SectionArea,
    SectionSubtitle,
    SectionDesc,
    SectionButton,
    SectionImg,
    SectionAreaColumn,
    SectionTitle,
    Article,
    ArticleTitle,
    ArticleText,
    ArticleArea,
    LogoImg,
    UserImg,
    AreaLogin,
    AreaLoginButton

} from './style.js';

function Apresentation(){

    const [widthDevice, setWidthService] = useState(window.innerWidth);
    const [showLogin, setShowLogin] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);

    function showLoginArea(){

        if(showLogin){

            setShowAnimation(!showAnimation);            

            setTimeout(() => {

                setShowLogin(!showLogin);

            }, 400);

        }else{

            setShowLogin(!showLogin);

            setTimeout(() => {

                setShowAnimation(!showAnimation);

            }, 10);

        }

    }

    return(

        <Container>

            <Header>

                <LogoImg src={Logo} />

                <Title>Study Tech</Title>

                <Cadastro>Cadastre-se agora</Cadastro>

                <OutlineButton mostrar={widthDevice}>Entrar</OutlineButton>

                <UserImg onClick={showLoginArea} src={User} />

                <AreaLogin animar={showAnimation} mostrar={showLogin}>
                
                    <AreaLoginButton>Entrar</AreaLoginButton>
                    <AreaLoginButton>Cadastrar</AreaLoginButton>

                </AreaLogin>
                
            </Header>

            <Main>

                <MainTextArea>

                    <TextArea>

                        <Badge>New</Badge>
                        <Message>Plataforma 100% gratuita.</Message>

                    </TextArea>

                    <TextArea>
                        <TitleIntroduction>Use a tecnologia a favor da sua empresa.</TitleIntroduction>
                    </TextArea>

                    <TextArea>

                        <Description>

                            Através de trilhas e aulas introdutórias de inúmeras ferramentas disponíveis no mercado, vamos te ajudar a utilizar a tecnologia à favor do seu negócio.

                        </Description>

                    </TextArea>

                    <BannerImg mostrar={false} src={Banner} />

                    <TextArea>

                        <SolidButton>Ver mais</SolidButton>

                        <OutlineButton>Criar conta</OutlineButton>

                    </TextArea>


                </MainTextArea>

                <MainImgArea>

                    <BannerImg mostrar={true} src={Banner} />

                </MainImgArea>

            </Main>

            <Section>

                <SectionArea>
                    
                    <SectionSubtitle>

                        Algumas tecnologias que são abordadas 
                        
                    </SectionSubtitle>

                    <SectionDesc>

                        Através de trilhas e aulas que  introduzem o princípio da ferramenta.
                    </SectionDesc>
                <SectionArea>  

                    <SectionImg mostrar={false} src={Linkedin} />
                    <SectionImg mostrar={false} src={WppBussiness} />
                    <SectionImg mostrar={false} src={Excel} />
                    <SectionImg mostrar={false} src={Trello} />
                
                </SectionArea>

                    <SectionButton>Acessar os cursos</SectionButton>                   
                   
                </SectionArea>

                <SectionArea>

                    <SectionImg mostrar={true} src={Linkedin} />
                    <SectionImg mostrar={true} src={WppBussiness} />
                    <SectionImg mostrar={true} src={Excel} />
                    <SectionImg mostrar={true} src={Trello} />

                </SectionArea>
                
            </Section>
            
            <Section>
                
                <SectionAreaColumn>

                    <SectionTitle>
                        Motivos para aderir tecnologia à sua empresa
                    </SectionTitle>
                
                </SectionAreaColumn>

                <ArticleArea>
                    
                    <Article>
                        
                        <ArticleTitle>
                            Lucratividade
                        </ArticleTitle>

                        <ArticleText>
                            Permite um trabalho mais eficaz, redução de custos, e uma maior qualidade de vida no trabalho.
                        </ArticleText>

                    </Article>

                    <Article>

                        <ArticleTitle>
                            Mercado
                        </ArticleTitle>

                        <ArticleText>
                            Aumenta a participação de mercado e melhora o ciclo de vida dos produtos e serviços.
                        </ArticleText>

                    </Article>

                    <Article>

                        <ArticleTitle>
                            Produtividade
                        </ArticleTitle>
                        
                        <ArticleText>
                            Otimiza processos, reduzindo o desperdício de recursos e fazendo mais com menos em menor tempo.
                        </ArticleText>

                    </Article>
                    
                </ArticleArea>

            </Section>

        </Container>

    );

}

export default Apresentation;