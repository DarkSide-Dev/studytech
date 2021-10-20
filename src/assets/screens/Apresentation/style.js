import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
    background-color: #0d378c;
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    position: fixed;
`;

export const Title = styled.h2`
    color: #ffffff;
    font-size: 30px;
    margin: 0;
    padding-left: 50px;
    font-weight: normal;
`;

export const Cadastro = styled.button`
    background-color: transparent;
    color: #d9d9d9;
    font-size: 20px;
    border: 0;
    margin-left: auto;
    cursor: pointer;
`;

export const OutlineButton = styled.button`
    color: #fff;
    background-color: transparent;
    font-size: 20px;
    border: 2px solid #38b6ff;
    border-radius: 5px;
    padding: 5px 30px;
    margin: 0 30px;
    cursor: pointer;

    :nth-child(2){
        font-size: 25px;
    }
`;

export const SolidButton = styled.button`
    color: #fff;
    background-color: #0554f2;
    font-size: 20px;
    border: 2px solid #38b6ff;
    border-radius: 5px;
    padding: 5px 30px;
    cursor: pointer;

    :nth-child(1){
        font-size: 25px;
    }
`;

export const Main = styled.main`
    width: 100vw;
    padding: 0 30px 50px 50px;
    box-sizing: border-box;
    background-color: #0d378c;
    display: flex;
    padding-top: 70px;
    border-bottom: 2px solid #fff;
`;

export const MainTextArea = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Badge = styled.p`
    background-color: #ff6e18;
    color: #152126;
    border: 0;
    border-radius: 5px;
    padding: 5px;
    font-weight: bold;
    margin: 0;
`;

export const Message = styled.p`
    margin: 0;
    color: #7fbbf2;
    padding-left: 10px;
    font-weight: bold;
`;

export const TextArea = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
`;

export const TitleIntroduction = styled.h1`
    color: #d9d9d9;
    font-size: 50px;
    margin: 0;
    width: 90%;
    padding-top: 20px;
`;

export const Description = styled.h2`
    color: #d9d9d9;
    width: 600px;
    font-weight: normal;
    font-size: 25px;
`;

export const BannerImg = styled.img`
    width: 80%;
`;

export const MainImgArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

export const Section = styled.section`
    background-color: #0554f2;
    display: flex;
    min-width: 100vw;
    max-width: 100vw;
    padding: 30px 30px 45px 50px;
    box-sizing: border-box;
    border-bottom: 2px solid #fff;
    
    :last-child{
        flex-direction: column;
        color:#d9d9d9;
    }
`;

export const SectionArea = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    :nth-child(2){
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        flex: 1.5;
    }
`;

export const SectionAreaColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const SectionSubtitle = styled.h3`
    color: #d9d9d9;
    font-weight: normal;
    font-size: 50px;
    margin: 0;
`;

export const SectionButton = styled.button`
    color: #fff;
    background-color: #0d378c;
    font-size: 30px;
    border-radius: 5px;
    width: 20rem;
    border: 2px solid transparent;
    margin: 20px 0 0 0;
    cursor: pointer;
`;

export const SectionTitle = styled.h3`
    font-weight: bold;
    color: #d9d9d9;
    font-size: 40px;
    margin: 0;
    text-align: center;
`;

export const SectionDesc = styled.p`
    font-size: 35px;
    color: #d9d9d9;
    margin: 0;
    font-size: 25px;
    padding-top: 20px;
    width: 80%;
`;

export const SectionImg = styled.img`
    border-radius: 20px;
    background-color: #fff;
    width: 100px;
    height: 100px;
    border: 2px solid #fff;
`;

export const ArticleArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 40px;
`;

export const Article = styled.article`
    border-radius: 10px;
    border: 10px double #0d378c;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    align-items: center;
    width: 300px;
    background-color: #a0bbf2;
    transition: box-shadow .3s ease-in-out;

    :hover{
        box-shadow: 0 0 30px #d9d9d9;
    }
`;

export const ArticleTitle = styled.h3`
    color: #152126;
    font-size: 32px;
    margin: 0;
    padding: 5px 0 15px 0;
`;

export const ArticleText = styled.p`
    color: #152126;
    font-size: 25px;
    margin: 0;
    text-align: center;
`;