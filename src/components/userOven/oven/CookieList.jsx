import { cookieListAPI } from 'api/cookie.api';
import { CookieBox, CookieImg, CookieItem, CookieName, OvenPen, PageButton, PageContainer } from 'components/userOven/oven/CookieList.style';
import { doughs } from 'constant/imgImport';
import { useEffect } from 'react';

export default function CookieList({ readModalActive, ovId }) {
  const cookieClick = () => {
    readModalActive(true);
  };

  useEffect(() => {
    cookieListAPI(ovId, 0);
  });
  return (
    <OvenPen>
      {/* 쿠키리스트 영역 */}
      <CookieBox>
        <CookieItem>
          <CookieImg onClick={cookieClick} src={doughs[1]} />
          <CookieName>내가 만든 쿠키</CookieName>
        </CookieItem>
        <CookieItem>
          <CookieImg src={doughs[2]} />
          <CookieName>내가 만든 쿠키</CookieName>
        </CookieItem>
        <CookieItem>
          <CookieImg src={doughs[3]} />
          <CookieName>내가 만든 쿠키</CookieName>
        </CookieItem>
        <CookieItem>
          <CookieImg src={doughs[4]} />
          <CookieName>내가 만든 쿠키</CookieName>
        </CookieItem>
        <CookieItem>
          <CookieImg src={doughs[5]} />
          <CookieName>내가 만든 쿠키</CookieName>
        </CookieItem>
      </CookieBox>
      {/* 페이지네이션 버튼 영역 */}
      <PageContainer $marginB="-20px">
        <PageButton direction="prev" />
        1/4
        <PageButton direction="next" />
      </PageContainer>
    </OvenPen>
  );
}
