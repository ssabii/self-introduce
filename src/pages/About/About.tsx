import React from 'react'
import styled from '@emotion/styled';
import PageContainer from 'components/common/PageContainer'
import InView from 'components/common/InView';
import Coffee from './assets/coffee.jpg';
import Mbti from './assets/mbti.png';
import Puppy from './assets/puppy.jpg';

function AboutMe() {
  return (
    <PageContainer>
      <Contents>
        <InView delay={1000}>
          <img alt="mbti" src={Mbti} width={400} height={500} />
        </InView>
        <InView delay={2000}>
          <img alt="강아지" src={Puppy} width={400} height={500} />
        </InView>
        <InView delay={3000}>
          <img alt="커피" src={Coffee} width={400} height={500} />
        </InView>
      </Contents>
    </PageContainer >
  )
}

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

export default AboutMe;