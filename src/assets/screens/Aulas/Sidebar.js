import React from "react";
import {FaPlayCircle} from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";

export const Sidebar = [
    {
        title: 'Iniciante',
        path: '/iniciante',
        icon: <FaPlayCircle/>,
        iconClosed: <FaAngleDown/>,
        iconOpened:<FaAngleUp/>,
        subNav: [
        {  
            title: 'Aula 1',
            subtitle: 'Introdução',
            path: '/iniciante/aula1',
            icon: <FaVideo/>
        },
        {  
            title: 'Aula 2',
            subtitle: 'Formatando Células',
            path: '/iniciante/aula2',
            icon: <FaVideo/>
        },
        {  
            title: 'Aula 3',
            subtitle: 'Operações Matemáticas',
            path: '/iniciante/aula3',
            icon: <FaVideo/>
        },
        {  
            title: 'Aula 4',
            subtitle: 'Gráficos e Média',
            path: '/iniciante/aula4',
            icon: <FaVideo/>
        },
        {  
            title: 'Aula 5',
            subtitle: 'Revisão',
            path: '/iniciante/aula5',
            icon: <FaVideo/>
        }
        ]
    },
    {
        title: 'Intermediário',
        path: '/intermediario',
        icon: <FaPlayCircle/>,
        iconClosed: <FaAngleDown/>,
        iconOpened:<FaAngleUp/>,
        subNav: [
        {  
            title: 'Aula 1',
            subtitle: 'Trabalhando com Condições',
            path: '/iniciante/aula1',
            icon: <FaVideo/>
        },
        {  
            title: 'Aula 2',
            subtitle: 'Validação de Células /Operação com datas',
            path: '/iniciante/aula2',
            icon: <FaVideo/>
        },
        {  
            title: 'Aula 3',
            subtitle: 'Trabalhando com Índices',
            path: '/iniciante/aula3',
            icon: <FaVideo/>
        },
        {  
            title: 'Aula 4',
            subtitle: 'Media, Meridiana, Desvio',
            path: '/iniciante/aula4',
            icon: <FaVideo/>
        },
        {  
            title: 'Aula 5',
            subtitle: 'Matriz',
            path: '/iniciante/aula5',
            icon: <FaVideo/>
        }
        ]
    }
]