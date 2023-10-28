import { cookieListAPI } from 'api/cookie.api';
import { CookieBox, CookieImg, CookieItem, CookieName, Dimmed, OvenPen, PageButton, PageContainer, ToastText } from 'components/userOven/oven/CookieList.style';
import { doughs, cookies } from 'constant/imgImport';
import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { MsgOpen } from 'atoms/msgOpenTimer';

export default function CookieList({ setReadCookie, ovId }) {
  const isOpenMsg = useRecoilValue(MsgOpen);
  const [showToast, setShowToast] = useState(false);
  const [cookieItems, setCookieItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const userInfo = JSON.parse(localStorage.getItem('CPUserInfo'));

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 1500); // 1.5초 후에 토스트 메시지를 숨김

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showToast]);

  const cookieClick = (e) => {
    if (isOpenMsg) {
      console.log(e.target.name[2]);
      if (e.target.name[2] === '1') {
        userInfo.usOvId === ovId ? setReadCookie(e.target.name[0]) : setShowToast(true);
      } else if (e.target.name[2] === '0') {
        setReadCookie(e.target.name[0]);
      }
    } else {
      setShowToast(true);
    }
  };

  useEffect(() => {
    const promise = cookieListAPI(ovId, page - 1);
    promise
      .then((res) => {
        console.log(res);
        setCookieItems(res.cookieDtoList);
        setTotalPage(res.totalPages);
      })
      .catch((err) => {
        alert(err);
      });
  }, [ovId, page]);

  const cookieitems = () => {
    if (cookieItems.length !== 0) {
      return cookieItems.map((item) => {
        return (
          <CookieItem key={item.ckId}>
            <CookieImg $ckimg={isOpenMsg ? cookies[item.ckDesign] : doughs[item.ckDesign]} name={[item.ckId, item.ckPrivateYn]} onClick={cookieClick} />
            <CookieName>
              {item.ckNickname}
              {item.ckPrivateYn && <span>🔒</span>}
            </CookieName>
          </CookieItem>
        );
      });
    } else {
      return '';
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <OvenPen>
        {/* 쿠키리스트 영역 */}
        <CookieBox>{cookieitems()}</CookieBox>
        {/* 페이지네이션 버튼 영역 */}
        <PageContainer $marginB="-20px">
          <PageButton direction="prev" onClick={prevPage} />
          {page}/{totalPage}
          <PageButton direction="next" onClick={nextPage} />
        </PageContainer>
        <Dimmed $show={showToast}>
          <ToastText>{isOpenMsg ? `비공개 메시지는 오븐주인만 볼 수 있어요` : `11월 11일부터 메세지를 확인하실 수 있어요 :)`}</ToastText>
        </Dimmed>
      </OvenPen>
    </>
  );
}
