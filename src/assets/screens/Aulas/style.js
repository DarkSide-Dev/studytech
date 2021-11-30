import styled from 'styled-components';

export const Container = styled.div `
    flex-direction: column;
    margin: 0;
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

    @media(max-width:445px){
        font-size: 20px;
        margin: 20px 35px;
    }

    @media(max-width:320px){
        font-size: 20px;
        margin: 20px;
    }
`;

export const NavUserArea = styled.div `
    display: flex;
    align-items: center;
    padding-right: 30px;
    position: relative;

    @media(max-width:445px){
        padding-right: 15px;
    }

    @media(max-width:320px){
        padding-right: 0;
        width: 45%;
    }
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

    @media(max-width:425px){
        margin: 2px;
    }
`;

export const NavUser = styled.p `
    color: #fff;
    cursor: pointer;

    @media(max-width:425px){
        font-size: 15px;
    }

    @media(max-width:320px){
        font-size: 13px;
    }
`;

export const AreaCurso= styled.section`
    box-sizing: border-box;
    display: flex;
    padding-top: 70px;
    color: #fff;
    margin: 0 35px;

    @media(max-width:768px){
        flex-direction: column;
    }

    @media(max-width:1024px){
        margin: 0;
    }
`;

export const AreaVideo = styled.div`
    background-color: #005aa7;
    flex: 1;
    flex-direction:column ;
    align-items: center;
    border: 1px solid #d9d9d9;

    @media(min-width:769px){
        width: 60%;
    }
    
    @media(min-width:1024px){
        width: 60%;
    }
`;

export const VideoTitle = styled.h2`
    font-size: 30px;
    color: #fff;
    text-align: center;
`;

export const AreaGuia = styled.div`
    background-color: #0d378c;
    width: 35%;

    @media(max-width:768px){
        width: 100%;
    }
`;
export const GuiaTitle = styled.h2`
    font-size: 25px;
    padding: 15px;
    margin: 0;
    padding-right: 50px;
    flex: 1;

    @media(max-width:425px){
        font-size: 20px;
    }
`;

export const Sidebar = styled.ul `
    opacity: ${props => props.opacity};
`;

export const AulaItem = styled.li `
    margin-bottom: 25px;
`;

export const Down = styled.img`
    flex: 0.15;
    height: 40px;
    width: 10%;
    margin: auto;
    margin-right: 10px;
    cursor: pointer;

    @media(max-width:768px){
        height: 25px;
    }
`;

 export const VideoPlayer = styled.video`
    height: 100%;
    max-width: 100%;
 `;

 export const FaseArea = styled.div`
    display: flex;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff; 
 `;

 export const Description = styled.p`
    margin: 60px 80px 50px 40px;

    @media(max-width:768px){
        display: none;
    }
 `;
