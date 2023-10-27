import React from 'react';
import { StyledHeader, Container, HomeLink } from 'components/common/Header/Header.style';

export default function Header({ type }) {
  return (
    <StyledHeader type={type}>
      <Container type={type}>
        <HomeLink to="/" />
      </Container>
    </StyledHeader>
  );
}
