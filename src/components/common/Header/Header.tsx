import React from 'react';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import LogoWrapper from './Logo';
import SearchForm from './SearchForm';
import AuthenticateSection from './AuthenticateSection';
import ServiceNav from './ServiceNav';

function Header() {
  return (
    <>
      <HeaderBlock>
        <Main>
          <LogoWrapper />
          <Spacer />
          <SearchForm placeholder='검색어를 입력하세요' />
          <AuthenticateSection />
        </Main>
        <NavWrapper>
          <ServiceNav />
        </NavWrapper>
      </HeaderBlock>
    </>
  );
}

const HeaderBlock = styled.header`
  z-index: 20;
  border-bottom: 1px solid ${colors.gray[300]};
  background-color: #ffffff;
  transition: background-color 0.3s, border-color 0.3s;
`;

const Main = styled.section`
  height: 74px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Spacer = styled.div`
  flex-grow: 1;
`

const NavWrapper = styled.div`
  width: 1200px;
  padding: 0 16px;
  margin: 0 auto;
`;

export default Header;