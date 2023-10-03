import { styled } from "styled-components";
import { Body, Bg } from "../Main";
import { Dimmed } from "../share/Dimmed";
import OvenHeader from "../share/OvenHeader";
import title from "../../assets/img/oven-list-title.png"
import OvenItem from "./OvenItem";

export default function OvenList() {
    return(
        <Body>
            <Bg>
                <Dimmed>
                    <OvenHeader />
                    <Container>
                        <Title />
                        <OvenItem mine="true"/>
                        <OvenItem />
                        <OvenItem />
                        <OvenItem />
                        <OvenItem />
                        <OvenItem />
                        <OvenItem />
                        <OvenItem />
                        <OvenItem />
                        <OvenItem />

                    </Container>
                </Dimmed>
            </Bg>
        </Body>
    );
}

const Container = styled.div`
    width: 1200px;
    height: 673px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px 53px;
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

const PageContainer = styled.div`
    width: 85px;
    height: 35px;
    border-radius: 24px;
    background-color: var(--gray-700);
`