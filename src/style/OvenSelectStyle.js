import { styled } from "styled-components";
import { Button } from './FormStyle';
import unchecked from '../assets/img/ico_unchecked.png';
import checked from '../assets/img/ico_checked.png';

export const H2 = styled.h2`
    text-align: center;
    letter-spacing : 2px;
    line-height: 21px;
    margin-top: 8px;
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

export const Input = styled.input`
    display: none;
`;

export const Img = styled.img`
    width: 175px; 
`;

export const SelectItem = styled.div`
    position: relative;

    &:hover {
        cursor: pointer;
    }

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

export const Check = styled.p`
    display: flex;
    align-items: center;
    line-height: 21px;
    margin: 0 auto;
    cursor: pointer;

    &::after {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-left: 8px;

        background-image: url(${unchecked});
        background-repeat: no-repeat;
        background-size: cover;
    }

    Input:checked + &::after {
        background-image: url(${checked});
    }
`;

export const CustomButton = styled(Button)`
    width: 286px;
`;