import {createGlobalStyle}from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;

    --bluee-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --backgroud: #F0F2F5;
    --shape: #FFFFFF;
}
* {
    margin: 0;
    padding : 0;
    box-sizing : border-box;
}

//font-size : 16px (ideal para desktop)

html{
    @media (max-width: 1080px) {
        font-size: 93.75%; // 15 px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; //14px
    }
}

body {
    backgound : var(--background);
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weigth: 400;
}

h1,h2,h3,h4,h5,h6, strong {
    font-weigth: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`