import styled from "styled-components";

export const Container = styled.div`
    background-color: #a0bbf2;
    display: flex;
    flex-direction: column;
`;

export const Nav = styled.nav`
    display: flex;
    background-color: #0553f1;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid #fff;
`;

export const NavTitle = styled.h2`
    padding-left: 20px;
    color: #fff;
`;

export const NavUserArea = styled.div`
    display: flex;
    align-items: center;
    padding-right: 20px;
    position: relative;
`;

export const NavList = styled.ul`
    position: absolute;
    background-color: red;
    list-style: none;
    padding: 0;
    width: 100%;
    bottom: -86px;
    background-color: #0553f1;
    border: 2px solid #fff;
    right: 0;
    height: 66px;
    transition: all ease .3s;
    opacity: ${props => props.opacity};
    display: ${props => props.display};
`;

export const NavItem = styled.li`
    text-align: center;
    padding: 5px 0;
    color: #fff;
    transition: all ease .3s;
    
    :first-of-type{
        border-bottom: 2px solid #fff;
    }

    :hover{
        background-color: #0446d0;
        cursor: pointer;
    }
`;

export const UserImg = styled.img`
    height: 50px;
    cursor: pointer;
`;

export const NavUser = styled.p`
    color: #fff;
    cursor: pointer;
`;

export const NavText = styled.p`
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 1px;
`;

export const CursoArea = styled.div`
    
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    margin-top: 20px;
`;

export const Curso = styled.div`

    display: flex;

    background-color: ${props => props.color};
    border-radius: 15px;
    min-height: 170px;
    margin: 10px 7px;
    width: 320px;
    box-sizing: border-box;
    padding: 0 10px;
    border: 2px solid #fff;
    
`;

export const AreaImagem = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CursoImagem = styled.img`
    height: 80px;
    background-color: white;
    border-radius: 11px;
    border: 2px solid #fff;
`;

export const AreaInfo = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
`;

export const CursoTitle = styled.h3`
    color: white;
    font-weight: bold;
    font-size: 30px;
    text-align: center;

    @media(max-width: 800px){
        font-size: 25px;
    }
`;

export const ProgressBar = styled.progress`
    
`;

export const CursoBtn = styled.button`


    :hover{
        background-color: #ddd !important;
    }
`;