import React, { useState } from 'react';

import {

    Container,
    Menu,
    MenuTitle,
    BannerArea,
    BannerForm,
    BannerInput,
    BannerLabel,
    Submit,
    PerguntasTable,
    PerguntasTd,
    PerguntasTr,
    Action,
    Option,
    Select,
    BannerFileLabel

} from './styled';

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import AddIcon from '../../../../img/add2.png';
import DeleteIcon from '../../../../img/delete.png';

const CoursesAddVideo = () => {

    let questModel = {

        'titulo': [],
        'dificuldade': [],
        'arquivo': []
    }

    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);

    const [indd, setIndd] = useState(0);

    const [img, setImg] = useState('');
    const [quest, setQuest] = useState(questModel);
    
    const [interTitle, setInterTitle] = useState('');
    const [interDif, setInterDif] = useState('');
    const [interFile, setInterFile] = useState('');

    const [interAlter, setInterAlter] = useState('');

    function previewFile(fileinput) {

        var file    = fileinput.target.files[0];
        var reader  = new FileReader();
      
        reader.onloadend = function () {
          setImg(reader.result);
        }
      
        if (file) {
          reader.readAsDataURL(file);
        } else {
          setImg('');
        }

    }

    function onCloseModal(){
        
        setModal(false);
        setInterTitle('');
        setInterDif('');
        setInterFile('');
        setModal2(false);
        setInterAlter('');

    }

    function addQuestion(){

        let intermediate = quest;

        intermediate.titulo.push(interTitle);
        intermediate.dificuldade.push(interDif);
        intermediate.arquivo.push('');
        setQuest(intermediate);
        onCloseModal();

        console.log(quest);
    }

    function addAlternative(index){

        let intermediate = quest;        

        intermediate.arquivo.forEach((element, indexx) => {

            if(index == indexx){                

                intermediate.arquivo[index] = interFile;

            }

        });

        setQuest(intermediate);
        onCloseModal();

        console.log(quest);

    }

    function deleteQuestion(index){

        let intermediate = quest;

        intermediate.pergunta.splice(index, 1);

        intermediate.alternativas.splice(index, 1);

        setQuest({...intermediate});

    }

    return(

        <Container>

            <Menu>
                <MenuTitle>Vídeos - Adicionar</MenuTitle>
            </Menu>

            <BannerArea>                

                <BannerForm>                    

                    <BannerLabel>Curso - Vídeos</BannerLabel>
                    <PerguntasTable>

                        {
                            quest.titulo.map((element, index) => {

                                if(quest.dificuldade[index] == 0){
                                    return(

                                        <PerguntasTr style={{backgroundColor: '#77dd77'}}>
    
                                            <PerguntasTd>{element}</PerguntasTd>
                                            <PerguntasTd>
                                                <Action src={AddIcon} onClick={() => {setModal2(true); setModal(true); setIndd(index)}} />
                                                <Action src={DeleteIcon} onClick={() => deleteQuestion(index)} />
                                            </PerguntasTd>
    
                                        </PerguntasTr>
    
                                    );
                                }

                            })

                        }

                        {
                            quest.titulo.map((element, index) => {

                                if(quest.dificuldade[index] == 1){
                                    return(

                                        <PerguntasTr style={{backgroundColor: '#f67828'}}>
    
                                            <PerguntasTd>{element}</PerguntasTd>
                                            <PerguntasTd>
                                                <Action src={AddIcon} onClick={() => {setModal2(true); setModal(true); setIndd(index)}} />
                                                <Action src={DeleteIcon} onClick={() => deleteQuestion(index)} />
                                            </PerguntasTd>
    
                                        </PerguntasTr>
    
                                    );
                                }

                            })

                        }

                        {
                            quest.titulo.map((element, index) => {

                                if(quest.dificuldade[index] == 2){
                                    return(

                                        <PerguntasTr style={{backgroundColor: '#ff6961'}}>
    
                                            <PerguntasTd>{element}</PerguntasTd>
                                            <PerguntasTd>
                                                <Action src={AddIcon} onClick={() => {setModal2(true); setModal(true); setIndd(index)}} />
                                                <Action src={DeleteIcon} onClick={() => deleteQuestion(index)} />
                                            </PerguntasTd>
    
                                        </PerguntasTr>
    
                                    );
                                }

                            })

                        }

                        <PerguntasTr>

                            <PerguntasTd onClick={() => setModal(true)} style={{textAlign: 'center'}} colSpan="2">Adicionar novo vídeo</PerguntasTd>

                        </PerguntasTr>

                    </PerguntasTable>

                    <Submit>Adicionar vídeos</Submit>

                </BannerForm>

            </BannerArea>

            <Modal open={modal} onClose={onCloseModal} center>
                
                { !modal2 &&
                    <>                        
                        <BannerLabel>Titulo do vídeo</BannerLabel>
                        <BannerInput display="block" type="text" style={{width: 310, marginBottom: 30}} onChange={e => setInterTitle(e.target.value)} />

                        <BannerLabel>Categoria</BannerLabel>
                        <Select onChange={e => setInterDif(e.target.value)} style={{marginBottom: 30}}>

                            <Option value="0">Iniciante</Option>
                            <Option value="1">Intermediário</Option>
                            <Option value="2">Avançado</Option>

                        </Select>

                        <Submit onClick={addQuestion}>Adicionar vídeo</Submit>
                    </>
                }

                { modal2 &&
                    <>
                        <BannerLabel>Arquivo</BannerLabel>
                        <br/>
                        {
                            quest.arquivo.map((element, index) => {

                                if(index == indd){

                                   return(

                                    <video controls={true} style={{width: 310}} src={img} />

                                   );

                                }
                                
                            })

                        }                        
                        
                        <BannerInput id="file" display="none" type="file" onChange={previewFile} accept=".mp4, .avi" />
                        <BannerFileLabel style={{width: 310}} for="file">Selecionar um arquivo</BannerFileLabel>                        

                        <Submit onClick={() => {addAlternative(indd)}}>Adicionar</Submit>
                    </>
                }                

            </Modal>

        </Container>

    );

}

export default CoursesAddVideo;