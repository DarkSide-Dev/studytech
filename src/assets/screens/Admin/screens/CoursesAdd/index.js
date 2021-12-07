import React, { useState } from 'react';

import {

    Container,
    Menu,
    MenuTitle,
    BannerArea,
    BannerForm,
    BannerInput,
    BannerLabel,
    BannerImgPreview,
    BannerFileLabel,
    Submit

} from './styled';

import Exemplo from '../../../../img/exemplo.jpg';
import AddIcon from '../../../../img/add.png';

const CoursesAdd = () => {

    const [img, setImg] = useState('');

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

    return(

        <Container>

            <Menu>
                <MenuTitle>Titulo - Adicionar</MenuTitle>
            </Menu>

            <BannerArea>                

                <BannerForm>

                    <BannerLabel>Titulo</BannerLabel>
                    <BannerInput display="block" type="text" />

                    <BannerLabel>Imagem</BannerLabel>
                    <BannerInput id="file" display="none" type="file" onChange={previewFile} accept=".jpg, .jpeg, .png, .gif" />
                    <BannerFileLabel for="file">Selecionar um arquivo</BannerFileLabel>

                    { img.length > 0 && 
                        <BannerLabel>Capa do curso:</BannerLabel>
                    }

                    <BannerImgPreview src={img} />

                    <Submit>Cadastrar</Submit>

                </BannerForm>

            </BannerArea>

        </Container>

    );

}

export default CoursesAdd;