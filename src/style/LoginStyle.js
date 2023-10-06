import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Input = styled.input`
    width: 100%;
    border: 4px solid var(--brown-300);   
    border-radius: 16px;
    background-color: var(--orange-300);
    padding: 12px;
    font-family: var(--basic-font);
    font-size: 16px;
    line-height: 19px;

    &::placeholder {
        color: var(--black);
    }
`;

export const LinkButton = styled(Link)`
    display: inline-block;
    text-align: center;
    width: 100%;
    border-radius: 16px;
    background-color: var(--orange-400);
    color: var(--black);
    margin-top: 20px;
    padding: 16px 0;
    font-size: 20px;
    line-height: 27px;
    cursor: pointer;
`;