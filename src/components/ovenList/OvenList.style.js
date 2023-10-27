import styled from 'styled-components';
import title from 'assets/img/oven-list-title.png';

export const Container = styled.div`
  max-width: 1440px;
  min-width: 830px;
  height: 673px;
  background-color: var(--orange-300);
  border-radius: 20px;
  padding: 32px 60px;
  font-family: var(--main-font);
  position: relative;
  margin: 26px 120px;
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
