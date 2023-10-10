import { styled } from "styled-components";
import { Button } from './Form.style';

export const H2 = styled.h2`
    text-align: center;
    letter-spacing : 2px;
    line-height: 21px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const SelectBox = styled.div`
    width: 100%;
    background-color: var(--gray-100);
    border-radius: 20px;
    padding: 48px 76px 28px 76px;
    display: flex;
    flex-wrap: wrap;
    gap: 44px 129px;
`;

export const Img = styled.img`
    width: 175px; 
    -webkit-user-drag: none;
`;

export const SelectItem = styled.div`
    position: relative;
    cursor: pointer;

    Input:checked + &::after {
        content: "내 오븐";
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,100%);

        font-family: var(--main-font);
        font-size: 15px;
        font-weight: 900;
        line-height: 20px;
        color: var(--brown-400);

        background-color: var(--orange-400);
        border-radius: 4px;
        padding: 4px 10px;
    }
`;

export const Label = styled.label`
    display: block;
    margin: 0 auto;
`;

export const CustomButton = styled(Button)`
    width: 286px;
`;