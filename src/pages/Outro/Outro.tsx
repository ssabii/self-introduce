import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Typed from 'typed.js';
import type { TypedOptions } from 'typed.js';
import colors from 'styles/colors';
import { Player } from '@lottiefiles/react-lottie-player';
import PageContainer from 'components/common/PageContainer';
import newYear from './assets/newYear.json';

function Outro() {
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
    <StyledPageContainer>
      <Player
        autoplay
        loop
        src={newYear}
        style={{ width: '1000px', height: '400px' }}
      >
      </Player>
      <TextWrapper>
        <Text ref={el} />
      </TextWrapper>
    </StyledPageContainer >
  )
}

const DEFAULT_PLACEHOLDER = ['잘부탁드립니다!'];

const options: TypedOptions = {
  strings: DEFAULT_PLACEHOLDER,
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  backDelay: 1000,
};

const StyledPageContainer = styled(PageContainer)`
  position: relative;
`

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

export default Outro;