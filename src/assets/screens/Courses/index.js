import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
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
    CursoArea

} from './style';

function Courses(){

    return(

        <div className="bg-st">

            <nav className="navbar container navbar-dark bg-primary">

                <div className="container-fluid">

                    <a className="navbar-brand">STUDY TECH</a>

                    <h3 className="text-light" style={{margin: 0}}>Cursos</h3>

                    <div className="dropdown">

                        <img src={UserIcon} class="rounded img-responsive dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" alt="..." />
                        <a className="navbar-brand dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown">Nome do usuário</a>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Configurações</a></li>
                            <li><a className="dropdown-item" href="#">Sair</a></li>
                        </ul>

                    </div>
                    
                </div>
                
            </nav>            

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
                    
                        <CursoTitle>Whatsapp Business</CursoTitle>

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

        </div>

    );

}

export default Courses;