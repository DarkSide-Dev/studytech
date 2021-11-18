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
    Action

} from './styled';

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import AddIcon from '../../../../img/add2.png';
import DeleteIcon from '../../../../img/delete.png';

const Form = () => {

    let questModel = {

        'pergunta': [],
        'alternativas': []
    }

    const [modal, setModal] = useState(false);
    const [img, setImg] = useState('');    
    const [quest, setQuest] = useState(questModel);
    const [interQuest, setInterQuest] = useState('');

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
        setInterQuest('');

    }

    function addQuestion(){

        let intermediate = quest;

        intermediate.pergunta.push(interQuest);
        intermediate.alternativas.push({});
        setQuest(intermediate);
        onCloseModal();
    }

    function deleteQuestion(index){

        let intermediate = quest;

        intermediate.pergunta.splice(index, 1);
        setQuest({...intermediate});

    }

    return(

        <Container>

            <Menu>
                <MenuTitle>Pesquisas - Adicionar</MenuTitle>
            </Menu>

            <BannerArea>                

                <BannerForm>

                    <BannerLabel>Titulo da pesquisa</BannerLabel>
                    <BannerInput display="block" type="text" />

                    <BannerLabel>Perguntas</BannerLabel>
                    <PerguntasTable>

                        {
                            quest.pergunta.map((element, index) => {

                                return(

                                    <PerguntasTr>

                                        <PerguntasTd>{element}</PerguntasTd>
                                        <PerguntasTd>
                                            <Action src={AddIcon} />
                                            <Action src={DeleteIcon} onClick={() => deleteQuestion(index)} />
                                        </PerguntasTd>

                                    </PerguntasTr>

                                );

                            })

                        }

                        <PerguntasTr>

                            <PerguntasTd onClick={() => setModal(true)} style={{textAlign: 'center'}} colSpan="2">Adicionar nova pergunta</PerguntasTd>

                        </PerguntasTr>

                    </PerguntasTable>

                    <Submit>Criar pesquisa</Submit>

                </BannerForm>

            </BannerArea>

            <Modal open={modal} onClose={onCloseModal} center>
                
                <BannerLabel>Pergunta</BannerLabel>
                <BannerInput value={interQuest} onChange={event => setInterQuest(event.target.value)} display="block" type="text" style={{width: 310}} />
                <Submit onClick={addQuestion}>Adicionar pergunta</Submit>

            </Modal>

        </Container>

    );

}

export default Form;