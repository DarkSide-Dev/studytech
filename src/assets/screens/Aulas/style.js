import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div `
    display: flex;
    background-color: #0d378c;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 3px solid #0553f1;
`;

export const Title = styled.h1 `
    color: #fff;
    margin: 20px 50px;
    font-size: 30px;
`;

export const NavUserArea = styled.div `
    display: flex;
    align-items: center;
    padding-right: 30px;
    position: relative;
`;

export const NavList = styled.ul `
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

export const NavItem = styled.li `
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

export const UserImg = styled.img `
    height: 40px;
    cursor: pointer;
    margin: 5px;
`;

export const NavUser = styled.p `
    color: #fff;
    cursor: pointer;
`;

export const AreaCurso= styled.section`
    box-sizing: border-box;
    display: flex;
    padding-top: 70px;
    color: #fff;
`;

export const AreaVideo = styled.div`
    background-color: #005aa7;
    flex: 1;
    display: flex;
    justify-content: center;
    
`;

export const VideoTitle = styled.h2`
    font-size: 30px;
    color: #fff;
`;

export const AreaGuia = styled.div`
    background-color: #0d378c;
    width: 35%;
`;
export const GuiaTitle = styled.h2`
    font-size: 25px;
    padding: 15px;
    margin: 0;
    border-bottom: 2px solid #fff;
    padding-right: 50px;
    
`;

export const Sidebar = styled.ul `
    
`;

export const AulaItem = styled.li `
    margin-bottom: 25px;
`;

export const GuiaTitle2 = styled.h2`
    font-size: 25px;
    padding: 15px;
    margin: 0;
    border-bottom: 2px solid #fff;
    border-top: 2px solid #fff;
   
`;

export const FaAngleDown = styled.a`

`;

