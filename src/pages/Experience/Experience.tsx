import React from 'react'
import styled from '@emotion/styled';
import PageContainer from 'components/common/PageContainer'
import InView from 'components/common/InView';
import UnityLogo from './assets/unity.png';
import ReactLogo from './assets/react.png';

function Experience() {
  return (
    <PageContainer>
      <Contents>
        <InView>
          <img alt="유니티" src={UnityLogo} width={450} />
        </InView>
        <InView delay={1000}>
          <Emoji>➡</Emoji>
        </InView>
        <InView delay={2000}>
          <img alt="리액트" src={ReactLogo} width={450} />
        </InView>
      </Contents>
    </PageContainer >
  )
};

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

const Emoji = styled.div`
  font-size: 80px;
  text-align: center;
`

export default Experience;

