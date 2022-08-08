import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
    --maxWidth:1280px;
    --white:#fff;
    --lightGrey:#eee;
    --darkGrey:#1c1c1c;
    --medGrey:#353535;
    --fontBig:1.5rem;
    --fontMed:1.2rem;
    --fontSuperBig:2.5rem;
    --fontSmall: 1rem;

}
* {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
} 

body{
    margin:0;
    padding:0;
}

`
