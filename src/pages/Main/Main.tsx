import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import type { TypedOptions } from 'typed.js';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import PageContainer from 'components/common/PageContainer';
import { Player } from '@lottiefiles/react-lottie-player';
import hello from './assets/hello.json'

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
      <Player
        autoplay
        loop
        src={hello}
        style={{ width: '1000px', height: '400px' }}
        speed={1}

      >
      </Player>
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

const TextWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${colors.gray[900]};
    font-size: 100px;
    font-weight: 500;
  }
`;

const Text = styled.span``;

export default Main;