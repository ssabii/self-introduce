import React from 'react'
import styled from '@emotion/styled';
import colors from 'styles/colors';

function Copyright() {
  return (
    <CopyrightWrapper>
      <Paragraph>
        (주)크몽은 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품, 상품정보, 거래에 관한 의무와 책임은 판매회원에게 있습니다.
      </Paragraph>
      <Paragraph>
        (주)크몽 사이트의 상품/판매회원/중개 서비스/거래 정보, 콘텐츠, UI 등에 대한 무단복제, 전송, 배포,
        스크래핑 등의 행위는 저작권법, 콘텐츠산업 진흥법 등 관련법령에 의하여 엄격히 금지됩니다. [안내 보기]
      </Paragraph>
      <CaptionWrapper>
        <Paragraph copyright>
          {`Copyright © ${new Date().getFullYear()} kmong Inc. All rights reserved.`}
        </Paragraph>
      </CaptionWrapper>
    </CopyrightWrapper>
  )
};

const CopyrightWrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
`;

const CaptionWrapper = styled.div`
  margin: 16px 0 8px 0;
`;

const Paragraph = styled.p<{ copyright?: boolean }>`
  margin: 0;
  font-size: 12px;
  color: ${({ copyright }) => copyright ? colors.gray[400] : colors.gray[500]};
`;

export default Copyright;