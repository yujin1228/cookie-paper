import styled from 'styled-components';

const FormContainer = styled.div`
    max-width: 386px;
    font-family: var(--main-font);
    margin: 68px auto;
`;

export const FormTitle = styled.h1`
    letter-spacing : 3px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin: 32px 0;
`;

export const FormGroup = styled.div`
    margin-bottom: 20px;
`;

export const InputBox = styled.div`
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    border-radius: 16px;
    background-color: ${props => props.disabled? 'var(--gray-100);': 'var(--orange-300);' };
    color: ${props => props.disabled? 'var(--gray-700);': 'var(--black);' };
    border: none;
    padding: 16px;
    font-family: var(--basic-font);

    &::placeholder {
        color: var(--black);
    }
`;

export const Label = styled.label`
    color: var(--black);
    display: inline-block;
    font-size: 20px;
    margin-bottom: 11px;
`;

export const InputButton = styled.button`
    position: absolute;
    background-color: ${props => props.disabled? 'var(--gray-400);': 'var(--orange-700);' };
    color: ${props => props.disabled? 'var(--gray-700);': 'var(--black);' };
    padding: 8px 9px;
    border-radius: 8px;
    top: 50%;
    right: 0;
    transform: translate(-14px,-50%);
`;

export const FormMessage = styled.p`
    font-family: var(--basic-font);
`;

export const CodeTimer = styled.span`
    color: var(--black);
    margin-left: 8px;
`;