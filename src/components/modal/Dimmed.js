import { styled } from "styled-components";

//모달 배경
export const Dimmed = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0; 
    left: 0; 
    bottom: 0; 
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index : 100;
`;