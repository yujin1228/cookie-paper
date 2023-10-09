import { PageButton, PageContainer } from "../../style/ShareStyle";
import { CookieBox, CookieImg, CookieItem, CookieName, OvenPen } from "../../style/UserOvenStyle";
import { doughs } from "../../style/_ImgImport";


export default function CookieList(props) {
    const cookieClick = () => {
        props.active(true);
    }

    return(
        <OvenPen>
            {/* 쿠키리스트 영역 */}
            <CookieBox>               
                <CookieItem>
                    <CookieImg onClick={cookieClick} src={doughs[1]}/>
                    <CookieName>내가 만든 쿠키</CookieName>
                </CookieItem>
                <CookieItem>
                    <CookieImg src={doughs[2]}/>
                    <CookieName>내가 만든 쿠키</CookieName>
                </CookieItem>
                <CookieItem>
                    <CookieImg src={doughs[3]}/>
                    <CookieName>내가 만든 쿠키</CookieName>
                </CookieItem>
                <CookieItem>
                    <CookieImg src={doughs[4]}/>
                    <CookieName>내가 만든 쿠키</CookieName>
                </CookieItem>
                <CookieItem>
                    <CookieImg src={doughs[5]}/>
                    <CookieName>내가 만든 쿠키</CookieName>
                </CookieItem>
            </CookieBox>
            {/* 페이지네이션 버튼 영역 */}
            <PageContainer $marginB="-20px">
                <PageButton direction="prev"/> 
                1/4
                <PageButton direction="next"/>
            </PageContainer>
        </OvenPen>
    );
}
