import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
body{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-image: url("https://eatatbento.com/wp-content/uploads/2022/04/Bento-Food-Light-Background.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
`