import { css } from "@emotion/react";

const DEFAULT_DISTANCE = 30;

export interface InViewAnimationProps {
  inView: boolean;
  duration?: number;
  delay?: number;
  xPosition?: boolean | number;
  yPosition?: boolean | number;
}

function inViewAnimation({
  inView,
  duration = 700,
  delay = 0,
  xPosition = 0,
  yPosition = 0,
}: InViewAnimationProps) {
  const x = xPosition === true ? DEFAULT_DISTANCE : xPosition;
  let y = yPosition === true ? DEFAULT_DISTANCE : yPosition;

  if (xPosition === 0 && yPosition === 0) {
    y = DEFAULT_DISTANCE;
  }

  return css`
    opacity: 0;
    transition: transform ${duration}ms cubic-bezier(0, 0, 0.2, 1) 0s,
    opacity ${duration}ms cubic-bezier(0, 0, 0.2, 1) 0s;
    transition-delay: ${delay}ms;
    transform: translate(${x}px, ${y}px);
    
  
    ${inView
      && css`
        opacity: 1;
        transform: translate(0, 0);
      `}
  `;
}

export default inViewAnimation;