import { styled } from "styled-components";

export const Container = styled.div`
    width: fit-content;
    //margin: 26px auto;
    display: flex;
    gap: 25px;
`

export const OvenInfo = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const Title = styled.h1`
    color: var(--black);
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
    width: fit-content;

    position: relative;

    &::after {
        content: "비공개🔒";
        display: block;
        width: 75px;
        height: 32px;
        background-color: var(--gray-300);
        border-radius: 16px;

        font-weight: 400;
        font-size: 15px;
        text-align: center;

        position: absolute;
        top: 0;
        right: -83px;
    }
`;

export const ID = styled.p`
    line-height: 22px;
    color: var(--black);
    margin-top: 2px;
    margin-bottom: 48px;
`;

export const OvenTimerBox = styled.div`
    width: 331px;
    background-color: var(--gray-900);
    margin: 0 auto;

    font-size: 24px;
    font-family: ${props => props.$end ? 'var(--message-font)' :'var(--timer-font)'};
    color: var(--gray-300);
    text-align: center;
    letter-spacing: ${props => props.$end ? '0' :'16px'};
    line-height: 69px;

    padding-left: ${props => props.$end ? '0' :'16px'};
`;

export const OvenImg = styled.img`
    width: 387px;
    height: 266px;
    object-fit: cover;
    object-position: center;
    vertical-align: bottom;
`;

export const ButtonBox = styled.div`
    display: flex;
    gap: 21px;
    margin-top: 64px;
`

/*======= 오븐펜 컴포넌트 =======*/
export const OvenPen = styled.div`
    width: 788px;
    height: 625px;
    background-color: var(--gray-800);
    border: 20px solid var(--gray-900);
    border-radius: 20px;
    padding: 28px 58px 20px 58px;
    position: relative;
`;

export const CookieBox = styled.div`
    width: 100%;
    max-height: 474px;

    display: flex;
    flex-wrap: wrap;
    gap: 24px 40px;
`;

export const CookieItem = styled.div`
    width: 184px;
    height: 137px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

`;

export const CookieImg = styled.img`
    height: 120px;
    vertical-align: bottom;
`;

export const CookieName = styled.h3`
    color: var(--gray-100);
`;  