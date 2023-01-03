import React, {
  forwardRef,
  ReactElement,
  useImperativeHandle,
  useRef,
} from 'react';
import Tippy, { TippyProps } from '@tippyjs/react';
import styled from '@emotion/styled';
import { Instance, Props } from 'tippy.js';
import colors from 'styles/colors';

export interface PopoverInstance {
  hide: () => void;
}
export interface PopoverProps
  extends Pick<
    TippyProps,
    | 'disabled'
    | 'visible'
    | 'children'
    | 'placement'
    | 'reference'
    | 'trigger'
    | 'maxWidth'
    | 'hideOnClick'
    | 'offset'
  > {
  /**
   * Tooltip과 다르게 string 타입은 불가능하며, ReactElement 타입만 입력받습니다.
   */
  content: ReactElement | null;
  onVisibleChange?: (visible: boolean) => void;
  maxWidth?: number;
}

const Popover = forwardRef<PopoverInstance, PopoverProps>(
  (
    {
      children,
      placement = 'bottom',
      trigger = 'click',
      onVisibleChange,
      maxWidth = 350,
      ...props
    },
    ref,
  ) => {
    const instance = useRef<Instance<Props> | null>(null);

    const handleCreate = (tippy: Instance<Props>) => {
      instance.current = tippy;
    };

    const handleMount = () => {
      if (onVisibleChange) {
        onVisibleChange(true);
      }
    };

    const handleHide = () => {
      if (onVisibleChange) {
        onVisibleChange(false);
      }
    };

    useImperativeHandle(
      ref,
      () => ({
        hide: () => instance.current?.hide(),
        show: () => instance.current?.show(),
      }),
      [],
    );

    return (
      <KmongPopover
        onCreate={handleCreate}
        onMount={handleMount}
        onHide={handleHide}
        animation="shift-away"
        placement={placement}
        {...typeof props.visible === 'undefined' && {
          trigger,
        }}
        maxWidth={maxWidth}
        interactive
        {...props}
      >
        {children}
      </KmongPopover>
    );
  },
);

Popover.displayName = 'Popover';

const KmongPopover = styled(Tippy) <{ dark?: boolean }>`
  position: relative;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.4;
  outline: 0;
  transition-property: transform, visibility, opacity;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  background-color: ${colors.gray[200]};

  .tippy-content {
    position: relative;
    padding: 0;
    z-index: 1;
  }

  /**
   * animation
   */
  &[data-animation="shift-away"][data-state="hidden"] {
    opacity: 0;
  }
  &[data-animation="shift-away"][data-state="hidden"][data-placement^="top"] {
    transform: translateY(8px);
  }
  &[data-animation="shift-away"][data-state="hidden"][data-placement^="bottom"] {
    transform: translateY(-8px);
  }
  &[data-animation="shift-away"][data-state="hidden"][data-placement^="left"] {
    transform: translateX(8px);
  }
  &[data-animation="shift-away"][data-state="hidden"][data-placement^="right"] {
    transform: translateX(-8px);
  }
`;

export default Popover;
