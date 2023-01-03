import React, { ReactNode } from 'react'
import styled from '@emotion/styled';
import colors from 'styles/colors';
import { useInView } from 'react-intersection-observer';
import inViewAnimation, { InViewAnimationProps } from './inViewAnimation';

export interface InViewProps extends Omit<InViewAnimationProps, 'inView'> {
  children?: ReactNode;
}

function InView({ children, ...props }: InViewProps) {
  const { ref, inView } = useInView();

  return (
    <div ref={ref}>
      <InViewBlock
        inView={inView}
        {...props}
      >
        {children}
      </InViewBlock>
    </div>
  )
}

const InViewBlock = styled.div<InViewAnimationProps>`
  font-size: 14px;
  line-height: normal;
  color: ${colors.gray[800]};
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  ${(props) => inViewAnimation(props)};
`;

export default InView