import styled from 'styled-components';
import title from 'assets/img/oven-list-title.png';

export const Container = styled.div`
  max-width: 1200px;
  min-width: 830px;
  height: 80vh;
  background-color: var(--orange-300);
  border-radius: 20px;
  padding: 32px 60px;
  font-family: var(--main-font);
  position: relative;
  margin: 26px auto;

  @media screen and (max-width: 1200px) {
    max-width: 1000px;
    min-width: 800px;
    padding: 32px 50px;
  }

  @media screen and (max-width: 768px) {
    max-width: 700px;
    min-width: 400px;
    padding: 32px 35px;
  }

  @media screen and (max-width: 480px) {
    max-width: 370px;
    min-width: 330px;
    padding: 28px 30px;
  }
`;

export const ScrollBox = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
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
  transform: translate(-50%, -50%);
`;

export const OvenBox = styled.div`
  width: 100%;
  max-height: 558px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px 53px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px 45px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px 38px;
  }
`;

export const EmptyText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  border-radius: 8px;
  padding: 12px 24px;
  box-shadow: 0px 5px 8px 0px rgba(167, 74, 7, 0.3);
`;
