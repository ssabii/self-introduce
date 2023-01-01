import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import Icons, { IconInterface } from './Icons';

export interface IconProps {
  name: keyof IconInterface
  color?: string;
  size?: number;
  rotate?: number;
  spin?: boolean;
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({
    name, color, size = 24, rotate = 0, spin = false, ...props
  }, ref) => (
    <IconBlock
      role="img"
      color={color}
      spin={spin}
      rotate={rotate}
      ref={ref}
      {...props}
    >
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        focusable={false}
        preserveAspectRatio="xMidYMid meet"
      >
        {Icons[name]}
      </Svg>
    </IconBlock>
  ),
);

Icon.displayName = 'Icon';

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const IconBlock = styled.span<{
  color?: string;
  spin: boolean;
  rotate: number;
}>`
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${(props) => props.color
    && css`
      color: ${props.color};
    `}

  ${(props) => props.spin
    && css`
      animation: ${spin} 1s infinite linear;
    `}

  ${(props) => props.rotate > 0
    && css`
      transform: rotate(${props.rotate}deg);
    `}
`;

const Svg = styled.svg`
  display: inline-block;
`;

export default Icon;
