import styled from 'styled-components';
 

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    max-width:var(--maxWidth);
    padding:20px 0;
    margin:0 auto;
    color: white;

    a{
        color: white;
        text-decoration: none;
    }
    .login{
        margin-left: 450px;
    }

`;

export const LogoImg = styled.img`
    width:200px;
    @media screen and (max-width:500px){
        width: 150px;
    }
`;

export const TMDBLogoImg = styled.img`
    width:100px;
    @media screen and (max-width:500px){
        width: 80px;
    }
`;

export const ImageContainer = styled.img`
  /* text-align: center; */
  /* margin: 24px 0 12px 0; */

    width: 30px;
    border-radius: 20px;
  
`;