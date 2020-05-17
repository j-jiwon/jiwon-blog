import { createGlobalStyle } from "styled-components"
import typography from "../utils/typography"
import Theme from "./Theme"

export default createGlobalStyle`
    ${typography};
    * {
        box-sizing: border-box;
    }
    body{
        font-size:13px;
        margin: 4px;
        line-height: 1.5;
       
    }
    a{
        text-decoration: none;
        
    }
    span{

    }
    p{
        display: block;
        margin-block-start: 0.5em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      
    }
    h1{
        font-weight: 600;
        font-size:2.33333rem;
        color: ${Theme.baseColor};
        
    }
    h2{
        font-size: 1.77778rem;
        font-weight: 600;
        margin: 2em 0px 0.75em;
    }
    h3{
        font-weight: 500;
        font-size: 25px;
        padding-top: 30px;
    }
    h4{
        font-weight: 500;
        font-size: 22px;
        padding-top: 30px;

    }
    h5{
        font-weight: 500;
        font-size: 20px;
        padding-top: 30px;

    }
    h6{
        font-weight: 500;
        font-size: 18px;
        padding-top: 30px;
    }
    
    input:focus{
        outline:none;
    }
    blockquote{
        margin-left: 0px;
        margin-right: 0px;
        padding: 0.388889rem 0.555556rem 0.277778rem 0.777778rem;
        border-left: 0.222222rem solid ${Theme.lightBaseColor};
        background-color: ${Theme.whiteBaseColor};
    }
    textarea {
        margin:0;
        border:0;
    }
    `
