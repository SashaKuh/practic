import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
        body{
                margin: 0;
        }
        ul{
                list-style: none;
                margin: 0;
                padding: 0;
        }
        img{
                display: block;
                max-width: 100%;
                object-fit: cover;
        }
`