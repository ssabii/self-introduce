import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import type { TypedOptions } from 'typed.js';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import PageContainer from 'components/common/PageContainer';

function Main() {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed>();

  useEffect(() => {
    if (!el.current) {
      return;
    }
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <PageContainer>
      <Emoji>✋🏻</Emoji>
      <TextWrapper>
        <Text ref={el} />
      </TextWrapper>
    </PageContainer>
  )
};

const DEFAULT_PLACEHOLDER = ['안녕하세요 요셉입니다!'];

const options: TypedOptions = {
  strings: DEFAULT_PLACEHOLDER,
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  backDelay: 1000,
};

const swing = keyframes`
  0% { transform: rotate(15deg); }
  100% { transform: rotate(-15deg); }
`

const Emoji = styled.div`
  font-size: 150px;
  transform-origin: center;
  animation: ${swing} ease-in-out 1s infinite alternate;
`

const TextWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${colors.gray[900]};
    font-size: 100px;
    font-weight: 500;
  }
`

const Text = styled.span`
`

export default Main;