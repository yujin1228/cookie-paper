import { createGlobalStyle } from "styled-components";
import cookieRunRegular from "../assets/font/CookieRun-Regular.woff";
import cookieRunBold from "../assets/font/CookieRun-Bold.woff";
import cookieRunBlack from "../assets/font/CookieRun-Black.woff";
import YeongdeokSea from "../assets/font/Yeongdeok-Sea.woff";
import digital from "../assets/font/DigitalNumbers-Regular.woff";

const GlobalStyle = createGlobalStyle`
    /*======== Import Fonts ========*/
    @font-face {
        font-family: 'CookieRun';
        font-weight: 400;
        font-style: normal;
        src: url(${cookieRunRegular}) format('woff');
    }

    @font-face {
        font-family: 'CookieRun';
        font-weight: 700;
        font-style: normal;
        src: url(${cookieRunBold}) format('woff');
    }

    @font-face {
        font-family: 'CookieRun';
        font-weight: 900;
        font-style: normal;
        src: url(${cookieRunBlack}) format('woff');
    }

    @font-face {
        font-family: 'YeongdeokSea';
        font-weight: 400;
        font-style: normal;
        src: url(${YeongdeokSea}) format('woff');
    }

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Digital-Numbers';
        font-weight: 400;
        font-style: normal;
        src: url(${digital}) format('woff');
    }
    

    /*======== Variable CSS ========*/
    :root {
        /*---------- Color ----------*/
        --white: #FFFFFF;
        --black: #2B2B2B;
        --bg-white: #FFFCF9;
        --red: #FF3232;

        --orange-700: #F1A83B;
        --orange-400: #FFCC69;
        --orange-300: #FFEDC9;
        --orange-100: #FFF6E5;

        --gray-900: #4B4B4B;
        --gray-800: #5B5B5B;
        --gray-700: #737373;
        --gray-400: #C2C2C2;
        --gray-300: #E7E7E7;
        --gray-100: #F4F4F4;

        --brown-700: #A04A1A;
        --brown-400: #AC5C3E;
        --brown-300: #D16400;
        --brown-100: #EACCA9;
    
        /*---------- Font ----------*/
        --main-font: 'CookieRun';
        --basic-font: 'Pretendard-Regular';
        --message-font: 'YeongdeokSea';
        --timer-font: 'Digital-Numbers';
    }


    /*======== Common Style ========*/
    .a11y-hidden {
        overflow: hidden;
        clip: rect(0 0 0 0); /* IE 6,7 */
        clip: rect(0,0,0,0);
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
    }

    *, :after, :before {
        box-sizing:border-box;
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
        outline: none;
        cursor: pointer;
    }
    
    input,input:focus,textarea,textarea:focus {
        color: inherit;
        text-decoration: none;
        outline: none;
    }
`;

export default GlobalStyle;