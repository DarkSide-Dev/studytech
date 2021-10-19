import React from 'react';

import Banner from '../../img/undraw_professor_8lrt.svg';
import WppBussiness from '../../img/whatsapp-business-34.png';
import Linkedin from '../../img/174857.png';
import Trello from '../../img/kisspng-trello-logo-slack-atlassian-trello-5b2bcdc8b0e154.9936644115295973847245.png';
import Excel from '../../img/excel-logo.png';

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
    SectionImg,
    SectionAreaColumn,
    SectionTitle,
    Article,
    ArticleTitle,
    ArticleText,
    ArticleArea

} from './style.js';

function Apresentation(){

    return(

        <Container>

            <Header>

                <Title>Study Tech</Title>

                <Cadastro>Cadastre-se agora</Cadastro>
                <OutlineButton>Entrar</OutlineButton>
                
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

                    <TextArea>

                        <SolidButton>Ver mais</SolidButton>

                        <OutlineButton>Criar conta</OutlineButton>

                    </TextArea>


                </MainTextArea>

                <MainImgArea>

                    <BannerImg src={Banner} />

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
                   
                </SectionArea>

                <SectionArea>

                    <SectionImg src={Linkedin} />
                    <SectionImg src={WppBussiness} />
                    <SectionImg src={Excel} />
                    <SectionImg src={Trello} />

                </SectionArea>
                
            </Section>
            
            <Section>
                
                <SectionAreaColumn>

                    <SectionTitle>
                        Por que aderir tecnologia à sua empresa
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