import styled from 'styled-components';
import title from "../assets/img/oven-list-title.png"

export const Container = styled.div`
    width: 1200px;
    height: 673px;
    background-color: var(--orange-300);
    border-radius: 20px;
    padding: 32px 60px;
    font-family: var(--main-font);
    position: relative;
`;

export const Title = styled.div`
    width: 122px;
    height: 34px;
    background-image: url(${title});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,-50%);
`;

export const OvenBox = styled.div`
    width: 100%;
    max-height: 558px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px 53px;
`;

export const Oven = styled.div`
    position: relative;
    font-family: var(--main-font);
    width: fit-content;
    height: fit-content;
    cursor: pointer;

    &::after {
        content: "내 오븐";
        display: ${(props) => props.$mine ? 'block' : 'none'};
        position: absolute;
        bottom: 0;
        right: 0;

        font-size: 15px;
        font-weight: 700;
        line-height: 20px;
        color: var(--orange-300);

        background-color: var(--brown-400);
        border-radius: 4px;
        padding: 4px 10px;
        box-shadow: 0 4px 8px 0 rgba(59, 59, 59, 0.4);
    }
`;

export const OvenTitle = styled.h2`
    line-height: 22px;
`;

export const Name = styled.span`
    font-weight: 700;
`;

export const OvenId = styled.p`
    color: var(--gray-700);
    font-size: 12px;
    line-height: 16px;
`
export const OvenImg = styled.img`
    width: 210px;
    height: 128px;
    object-fit: cover;
    object-position: center;
    margin: 0 10px 4px 10px;
    vertical-align: bottom;
    
`;