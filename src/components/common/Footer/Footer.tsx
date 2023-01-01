import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CustomerCenter from './CustomerCenter';
import Kmong from './Kmong';
import KmongInfo from './KmongInfo';
import FamilySites from './FamilySites';
import Support from './Support';
import GooglePlayButton from './GooglePlayButton';
import AppStoreButton from './AppStoreButton';
import CompanyInformation from './CompanyInformation';
import { Column } from './Column';
import Copyright from './Copyright';

function Footer() {
  return (
    <FooterBlock>
      <Divider />

      <Container>
        <ContentsBlock>
          {contents.map((content, index) => (
            <Column key={index}>
              {content}
            </Column>
          ))}
        </ContentsBlock>
        <AppButtons>
          <AppButtonWrapper marginRight='8px'>
            <GooglePlayButton />
          </AppButtonWrapper>
          <AppButtonWrapper>
            <AppStoreButton />
          </AppButtonWrapper>
        </AppButtons>
      </Container>

      <Divider />

      <CompanyInformation />
      <Copyright />
    </FooterBlock>
  )
};

const contents = [
  <CustomerCenter />,
  <Kmong />,
  <KmongInfo />,
  <FamilySites />,
  <Support />,
]

const FooterBlock = styled.footer``;

const Divider = styled.hr`
  height: 1px;
  margin: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0.12);
`;

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  position: relative;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
`;

const AppButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 128px;
`;

const AppButtonWrapper = styled.div<{ marginRight?: string }>`
  ${({ marginRight }) => marginRight && css`margin-right: ${marginRight};`} 
`;

const ContentsBlock = styled.nav`
  padding-top: 32px;
  padding-bottom: 16px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`;

export default Footer;