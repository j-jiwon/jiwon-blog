import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import typography from "../utils/typography"

export default createGlobalStyle`
    ${reset};
    ${typography};
    * {
        box-sizing: border-box;
      
    }
    body{
        font-size:14px;
        margin: 4px;
        line-height: 1.5;
    }
    a{
        text-decoration: none;
    }
    span{

    }
    h1{
        font-weight: 600;
        font-size: 33px;        
    }
    h2{
        font-weight: 500;
        font-size: 30px;
        padding-top: 30px;
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
    
`
