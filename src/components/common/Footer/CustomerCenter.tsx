import React from 'react'
import styled from '@emotion/styled';
import colors from 'styles/colors';
import Button from '../Button';

function CustomerCenter() {
  return (
    <>
      <ServiceTitle>
        고객센터
      </ServiceTitle>
      <ServiceContent>
        10:30~18:00 (점심시간 13:00~14:00)
      </ServiceContent>
      <ServiceContent>
        주말, 공휴일 휴무
      </ServiceContent>
      <InquireButton
        target="_blank"
        href="https://www.kmong.com /zendesk/login?return_url=https://support.kmong.com/hc/ko/requests/new"
      >
        1:1 문의
      </InquireButton>
    </>
  )
}

const ServiceTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 8px 0;
  line-height: 1.5;
  letter-spacing: -0.34px;
`;

const ServiceContent = styled.p`
  font-size: 13px;
  line-height: 2;
  letter-spacing: -0.28px;
  color: ${colors.gray[500]};
  margin: 0;
`;

const InquireButton = styled(Button)`
  margin-top: 16px;
  border: 1px solid ${colors.gray[700]};
`;



export default CustomerCenter