import { styled } from "styled-components";
import { Helmet } from 'react-helmet-async';
import { Body, Bg } from "./Main";
import { Dimmed } from "../components/share/Dimmed";
import OvenHeader from "../components/share/OvenHeader";
import title from "../assets/img/oven-list-title.png"
import OvenItem from "../components/ovenList/OvenItem";

export default function OvenList() {
    //로그인한 상태일때 내오븐 제일 앞에 정렬, 인덱스0인 오븐에 mine=true 값 부여
    return(
    <>
    <Helmet>
        <title>쿠키페이퍼 | 오븐리스트</title>
    </Helmet>
    <Body>
        <Bg>
            <Dimmed>
                <OvenHeader />
                <Container>
                    <Title />
                    <OvenBox>
                        <OvenItem id="cookie1" name="쿠키메이커1" oven={1} mine="true"/>
                        <OvenItem id="cookie2" name="쿠키메이커2" oven={3} mine="false" />
                    </OvenBox>
                    <PageContainer>
                        <PageButton>&#60;&#60;</PageButton> 
                        <span>1/4</span>
                        <PageButton>&#62;&#62;</PageButton>
                    </PageContainer>
                </Container>
            </Dimmed>
        </Bg>
    </Body>
    </>
    );
}

const Container = styled.div`
    width: 1200px;
    height: 673px;
    margin: 21px auto;
    background-color: var(--orange-300);
    border-radius: 20px;
    padding: 32px 60px;
    font-family: var(--main-font);
    position: relative;
`;

const Title = styled.div`
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

const OvenBox = styled.div`
    width: 100%;
    height: 558px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px 53px;
    margin-bottom: 16px;
`;

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 85px;
    height: 35px;
    border-radius: 24px;
    background-color: var(--gray-700);
    margin: 0 auto;
    font-size: 14px;
    color: var(--gray-300);
`

const PageButton = styled.button`
    font-family: var(--main-font);
    color: var(--gray-300);
`;