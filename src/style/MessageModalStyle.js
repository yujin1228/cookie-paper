import { styled } from "styled-components";
import closeButton from '../assets/img/close_circle.png'

export const Container = styled.div`
    width: 1024px;
    height: 632px;
    background-color: var(--brown-100);
    border-radius: 16px;
    padding: ${props => props.$padsize || '24px 36px'};
    position: relative;
`;

export const CloseButton = styled.button`
    width: 48px;
    height: 48px;
    background: url(${closeButton}) no-repeat;
    background-size: cover;

    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-34px,16px);
`;

export const Title =styled.h2`
    color: var(--black);
    font-size: 24px;
    font-weight: 700;
    line-height: 33px;
    margin-bottom: 18px;
`;

export const TextBox = styled.div`
    width: ${props => props.boxw || '660px'};
    height: ${props => props.boxh || '368px'};
    border-radius: 16px;
    background-color: var(--orange-100);
    padding: 26px 30px;
    position: relative;
    font-family: var(--message-font);
    font-size: 18px;
    line-height: 32px;
    ${props=> props.$scroll && 'overflow: auto;'}
`;

export const TextInput = styled.textarea`
    width: 100%;
    height: 100%;
    line-height: 24px;
    background-color: var(--orange-100);
    border: none;
    outline: none;
    resize: none;
    color: var(--black);
    font-size: 16px;
    font-family: var(--message-font);
`;

export const TextCount = styled.span`
    font-family: var(--main-font);
    font-size: 12px;
    color: var(--gray-700);
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-30px,-24px);
`;

export const NameInput = styled.input`
    width: 100%;
    padding: 14px 16px;
    background-color: var(--orange-100);
    border: none;
    border-radius: 16px;
    font-family: var(--main-font);

    &::placeholder {
        color: var(--black);
        font-size: 14px;
    }
`;

export const From = styled.label`
    font-weight: 700;
    line-height: 21px;
    margin-top: 4px;
`;

export const Box = styled.div`
    width: ${props => props.boxw || 'fit-content'};
    display: flex;
    flex-direction: ${props => props.flexdir || 'row'};
    gap: ${props => props.flexgap || '28px'};
`;


/*====== 리드쿠키메시지모달 ======*/
export const Comment = styled.div`
    width: 302px;
    font-size: 26px;
    font-weight: 700;
    line-height: 72px;
    text-align: center;
    background-color: var(--orange-100);
    border-radius: 16px;
    margin-top: 24px;
`;

export const CookieImg = styled.img`
    width: 302px;
    height: 256px;
    object-fit: cover;
`;

export const P = styled.p`
    font-size: 24px;
    line-height: 33px;
    font-weight: ${props => props.fontw || 400};
    text-align: center;
`;