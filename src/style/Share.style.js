import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mainback from '../assets/img/back_main.png';
import next from '../assets/img/page_next.png';
import prev from '../assets/img/page_prev.png';
import unchecked from '../assets/img/ico_unchecked.png';
import checked from '../assets/img/ico_checked.png';
import unchecked2 from '../assets/img/ico_unchecked_2.png';
import checked2 from '../assets/img/ico_checked_2.png';

/*======= 버튼 컴포넌트 =======*/
export const Button = styled(Link)`
    display: inline-block;
    width: 100%;
    text-align: center;
    font-family: var(--main-font);
    font-weight: 700;
    border-radius: 16px;
    background-color: var(--brown-400);
    color: var(--orange-400);
    padding: 16px 0;
    font-size: 24px;
    line-height: 32px;
    
    box-shadow: 0 4px 6px 0 rgba(59, 59, 59, 0.4);

    cursor: pointer;
`;

export const OvenButton = styled.button`
    width: ${props => props.width || '183px'};
    height: 67px;
    background-color: var(--white);
    padding: 20px 0;
    border-radius: 16px;
    box-shadow: 0 5px 8px 0 rgba(167, 74, 7, 0.6);

    color: var(--brown-300);
    font-size: ${props => props.$fonts || '20px'};
    font-weight: 700;
    line-height: 27px;

    margin-top: ${props => props.mtop || '0'};
    
`;

/*======= 배경 컴포넌트 =======*/
export const Body = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to right, 
    ${props => props.$startcolor || '#F9D695'}, 
    ${props => props.$endcolor || '#FCDEA4' }  );
    /* display: flex;
    justify-content: center;
    align-items: center; */
`;  

export const Bg = styled.div`
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    background: url(${props => props.$back || mainback }) no-repeat;
    background-size: cover;
    background-position: top;
    position: relative;
`;

export const Dimmed = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0; 
    left: 0; 
    bottom: 0; 
    right: 0;
    background-color: ${props => props.light ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.52)'};
    z-index : ${props => props.zIndex || 101 };

    display: flex;
    justify-content: center;
    align-items: center;
`;


/*======= 페이지네이션 컴포넌트 =======*/
export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    width: 85px;
    height: 35px;
    border-radius: 24px;
    background-color: var(--gray-700);
    margin: 0 auto;
    font-size: 14px;
    color: var(--gray-300);

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,${props => props.$marginB || '-32px'});
`;

export const PageButton = styled.button`
    width: 16px;
    height: 16px;
    background-image: url(${props => props.direction == "next" ? next : prev});
    background-size: cover;
`;


/*======= 인풋 커스텀 컴포넌트 =======*/
export const Input = styled.input`
    display: none;
`;

export const Check = styled.p`
    display: flex;
    align-items: center;
    font-size: ${props => props.size || '16px'};
    line-height: ${props => props.lineh || '21px'};
    margin: 0 auto;
    cursor: pointer;

    &::after {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-left: 8px;

        background-image: url(${props => props.num == "2" ? unchecked2 : unchecked});
        background-repeat: no-repeat;
        background-size: cover;
    }

    Input:checked + &::after {
        background-image: url(${props => props.num == "2" ? checked2 : checked});
    }
`;