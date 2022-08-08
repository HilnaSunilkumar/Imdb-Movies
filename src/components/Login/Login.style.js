import styled from "styled-components";
import BackImg from '../../images/background_img.jpg'

export const Wrapper = styled.div` 
  background: url(${BackImg});
  max-width: 100%;
  background-size: contain;
  background-position: center;
  height: 750px;
  position:relative;
  color: white;
  font-size:20px ;
  
`;


export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 400px;
  padding: 190px 0;

  input {
    width: 100%;
    height: 40px;
    border: 2px solid;
    color: var(--darkGrey);
    border-radius: 20px;
    margin: 20px 0;
    padding: 10px;
  }
  button {
    width: 50%;
  }

  .error {
    color: orange;
  }
`;
