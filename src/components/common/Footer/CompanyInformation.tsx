import styled from '@emotion/styled';
import React from 'react'
import colors from 'styles/colors';
import Button from '../Button';

function CompanyInformation() {
  return (
    <Container>
      <Paragraph>
        (주)크몽
        <Bar />
        서울시 서초구 사임당로 157, 3층
        <Bar />
        대표 : 박현호
        <Bar />
        개인정보관리책임자 : 송준이
        <Bar />
        사업자등록번호 : 613-81-65278
        <BusinessButton
          size="xsmall"
          target="_blank"
          href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=6138165278"
        >
          사업자 정보확인
        </BusinessButton>
        <br />
        통신판매업신고 : 2018-서울서초-2134
        <Bar />
        유료직업소개사업등록번호 : 제2021-3210195-14-5-00035호
        <Bar />
        고객센터 : 1544-6254
        <Bar />
        help@kmong.com
      </Paragraph>
    </Container>
  )
};

const Container = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: 16px auto 0 auto;
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.15;
  margin: 0;
  color: ${colors.gray[800]};
  text-align: inherit;
  font-size: 13px;
`;

const Bar = styled.span`
  margin: 0 4px;
  font-size: 14px;
  color: ${colors.gray[800]};

  &:after {
    content: '|';
  }
`;

const BusinessButton = styled(Button)`
  margin-left: 8px;
`;

export default CompanyInformation;