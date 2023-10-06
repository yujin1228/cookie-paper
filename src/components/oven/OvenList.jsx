import OvenItem from "./OvenItem";
import { Container, OvenBox, Title } from "../../style/OvenListStyle"
import { PageButton, PageContainer } from "../../style/ShareStyle";

export default function OvenList() {
    //OvenBox안에 OvenItem들 map으로 뿌려주고 페이지 넘기는 기능 있어야함...

    return(
    <Container>
        <Title />
        <OvenBox>
            <OvenItem id="cookie1" name="쿠키메이커1" oven={1} mine={true}/>
            <OvenItem id="starng11" name="최유진" oven={3} mine={false} />
        </OvenBox>
        <PageContainer>
            <PageButton /> 
            <span>1/4</span>
            <PageButton />
        </PageContainer>
    </Container>
    );
}


