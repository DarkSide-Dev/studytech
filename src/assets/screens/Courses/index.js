import React, { useState } from 'react';
import './style.css';
import UserIcon from '../../img/user.png';
import LinkedinIcon from '../../img/174857.png';
import ExcelIcon from '../../img/excel-logo.png';
import WhatsIcon from '../../img/whatsapp-business-34.png';

import {

    AreaImagem,
    AreaInfo,
    Curso,
    CursoBtn,
    CursoImagem,
    CursoTitle,
    CursoArea,
    Container,
    Nav,
    NavTitle,
    NavUserArea,
    UserImg,
    NavUser,
    NavList,
    NavItem,
    NavText

} from './style';

function Courses(){

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

    return(

        <Container>

            <Nav>

                <NavTitle>STUDY TECH</NavTitle>

                <NavText>Cursos</NavText>

                <NavUserArea>

                    <UserImg onClick={showMenu} src={UserIcon} />
                    
                    <NavUser onClick={showMenu}>Gabriel Prado</NavUser>

                    <NavList opacity={opacity} display={display}>

                        <NavItem>Configurações</NavItem>
                        
                        <NavItem>Sair</NavItem>
                        
                    </NavList>

                </NavUserArea>
                
            </Nav>            

            <CursoArea>

                <Curso color="#0554f2" className="col-md-4 mb-3">

                    <AreaImagem>
                    
                        <CursoImagem src={LinkedinIcon} />

                    </AreaImagem>

                    <AreaInfo>
                    
                        <CursoTitle>Linkedin</CursoTitle>

                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <CursoBtn className="btn btn-light">Acessar</CursoBtn>
                    
                    </AreaInfo>

                </Curso>

                <Curso color="#107c41" className="col-md-4 mb-3">

                    <AreaImagem>
                    
                        <CursoImagem src={ExcelIcon} />

                    </AreaImagem>

                    <AreaInfo>
                    
                        <CursoTitle>Excel</CursoTitle>

                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <CursoBtn className="btn btn-light">Acessar</CursoBtn>
                    
                    </AreaInfo>

                </Curso>

                <Curso color="#2ebc2c" className="col-md-4 mb-3">

                    <AreaImagem>
                    
                        <CursoImagem src={WhatsIcon} />

                    </AreaImagem>

                    <AreaInfo>
                    
                        <CursoTitle>Business</CursoTitle>

                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <CursoBtn className="btn btn-light">Acessar</CursoBtn>
                    
                    </AreaInfo>

                </Curso>

                <Curso color="#0554f2" className="col-md-4 mb-3">

                    <AreaImagem>
                    
                        <CursoImagem src={LinkedinIcon} />

                    </AreaImagem>

                    <AreaInfo>
                    
                        <CursoTitle>Linkedin</CursoTitle>

                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <CursoBtn className="btn btn-light">Acessar</CursoBtn>
                    
                    </AreaInfo>

                </Curso>

                <Curso color="#107c41" className="col-md-4 mb-3">

                    <AreaImagem>
                    
                        <CursoImagem src={ExcelIcon} />

                    </AreaImagem>

                    <AreaInfo>
                    
                        <CursoTitle>Excel</CursoTitle>

                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <CursoBtn className="btn btn-light">Acessar</CursoBtn>
                    
                    </AreaInfo>

                </Curso>

            </CursoArea>

        </Container>

    );

}

export default Courses;