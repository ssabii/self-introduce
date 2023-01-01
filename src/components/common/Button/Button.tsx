import { css } from '@emotion/react';
import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { rgba } from 'polished';
import colors, { Color, ColorScale } from 'styles/colors';
import Progress from '../Progress';
import { WithRequired } from 'utils/WithRequired';
import { InputSizes } from '../InputSizes';

type Extends<T, U extends T> = U;

export type ButtonVariants = 'default' | 'text' | 'contained' | 'outlined';
export type ButtonColors = 'default' | Extends<Color, 'yellow' | 'orange' | 'skyblue' | 'blue' | 'denim' | 'purple'>;

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'color'> {
  children: React.ReactNode;
  size?: InputSizes;
  variant?: ButtonVariants;
  disabled?: boolean;
  color?: ButtonColors;
  rounded?: boolean;
  fullWidth?: boolean;
  href?: string;
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  dark?: boolean;
  icon?: boolean;
  target?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = 'medium',
      variant = 'default',
      disabled = false,
      color = 'default',
      rounded = false,
      fullWidth = false,
      href,
      loading = false,
      startIcon,
      endIcon,
      dark,
      icon,
      ...others
    },
    ref,
  ) => (
    <ButtonBlock
      role={href ? 'link' : 'button'}
      as={href ? 'a' : 'button'}
      color={color}
      variant={variant}
      disabled={disabled || loading}
      size={size}
      rounded={rounded}
      fullWidth={fullWidth}
      href={href}
      ref={ref}
      dark={dark}
      icon={icon}
      {...others}
    >
      {startIcon && <StartIconWrapper>{startIcon}</StartIconWrapper>}
      <Label isLoading={loading}>{children}</Label>
      {endIcon && <EndIconWrapper>{endIcon}</EndIconWrapper>}

      {loading && (
        <ProgressWrapper>
          <Progress size={size} />
        </ProgressWrapper>
      )}
    </ButtonBlock>
  )
  ,
);

type ButtonBlockProps = Pick<ButtonProps, 'href' | 'variant' | 'size' | 'rounded' | 'fullWidth' | 'dark' | 'icon'> & {
  as?: React.ElementType;
  color: ButtonColors;
};

export type RequiredButtonProps = WithRequired<ButtonBlockProps, 'size' | 'color' | 'variant' | 'rounded'>;

const ButtonBlock = styled.button<RequiredButtonProps>`
  outline: none;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  border-radius: 4px;
  line-height: 1;
  font-weight: 500;
  transition: background-color 0.3s, border-color 0.3s;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  user-select: none;
  white-space: nowrap;
  max-width: 100%;
  ${(props) => props.fullWidth
    && css`
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    `}
  ${(props) => sizes({ rounded: props.rounded, icon: props.icon })[props.size]};

  ${(props) => props.variant === 'default' && defaultStyle[props.color]};
  ${(props) => props.variant === 'text'
    && textStyle[props.dark ? 'dark' : 'light'][props.color]};
  ${(props) => props.variant === 'contained' && containedStyle[props.color]};
  ${(props) => props.variant === 'outlined'
    && outlinedStyle[props.dark ? 'dark' : 'light'][props.color]};

  &:disabled {
    cursor: not-allowed;
    ${(props) => props.variant === 'text'
    && textDisabledStyle[props.dark ? 'dark' : 'light']};
    ${(props) => (props.variant === 'default' || props.variant === 'contained')
    && containedDisabledStyle[props.dark ? 'dark' : 'light']};
    ${(props) => props.variant === 'outlined'
    && outlinedDisabledStyle[props.dark ? 'dark' : 'light']};
  }
`;

const Label = styled.span<{ isLoading: boolean }>`
  ${(props) => props.isLoading
    && css`
      opacity: 0;
    `}
`;

const ProgressWrapper = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StartIconWrapper = styled('span', { target: '' })``;
const EndIconWrapper = styled('span', { target: '' })``;

interface ButtonSizeBuilderProps {
  height: number;
  fontSize: number;
  iconSize: number;
  padding: number;
  minWidth: number;
  iconSpace: number;
  rounded: boolean;
  icon: boolean | undefined;
}

const buttonSizeBuilder = ({
  height,
  fontSize,
  iconSize,
  padding,
  minWidth,
  iconSpace,
  rounded,
  icon,
}: ButtonSizeBuilderProps) => css`
  height: ${height}px;
  font-size: ${fontSize}px;
  padding: 0 ${padding}px;
  ${icon
    ? css`
        min-width: ${height}px;
        padding: 0;
        svg {
          width: ${iconSize * 1.4}px;
          height: ${iconSize * 1.4}px;
        }
      `
    : css`
        min-width: ${minWidth}px;
        svg {
          width: ${iconSize}px;
          height: ${iconSize}px;
        }
      `};
  ${rounded
  && css`
      border-radius: ${height / 2}px;
    `};
  /** Icon */
  ${StartIconWrapper} {
    margin-left: ${fontSize - iconSize}px;
    margin-right: ${iconSpace}px;
  }
  ${EndIconWrapper} {
    margin-left: ${iconSpace}px;
    margin-right: ${fontSize - iconSize}px;
  }
`;

const sizes = ({ rounded, icon }: Pick<RequiredButtonProps, 'rounded' | 'icon'>) => ({
  xsmall: buttonSizeBuilder({
    height: 24,
    fontSize: 12,
    iconSize: 14,
    padding: 8,
    minWidth: 48,
    iconSpace: 3,
    rounded,
    icon,
  }),
  small: buttonSizeBuilder({
    height: 32,
    fontSize: 13,
    iconSize: 16,
    padding: 12,
    minWidth: 64,
    iconSpace: 4,
    rounded,
    icon,
  }),
  medium: buttonSizeBuilder({
    height: 36,
    fontSize: 14,
    iconSize: 18,
    padding: 16,
    minWidth: 64,
    iconSpace: 6,
    rounded,
    icon,
  }),
  large: buttonSizeBuilder({
    height: 42,
    fontSize: 15,
    iconSize: 20,
    padding: 22,
    minWidth: 64,
    iconSpace: 6,
    rounded,
    icon,
  }),
  xlarge: buttonSizeBuilder({
    height: 52,
    fontSize: 16,
    iconSize: 22,
    padding: 24,
    minWidth: 80,
    iconSpace: 8,
    rounded,
    icon,
  }),
});

const defaultStyleBuilder = (color: Color) => css`
  background-color: #ffffff;
  border-color: ${colors[color][400]};
  color: ${colors.gray[800]};
  &:hover {
    background-color: ${colors[color][200]};
    border-color: ${colors[color][500]};
  }
  &:focus {
    box-shadow: 0 0 1px 2px ${colors[color][300]};
  }
  &:active {
    background-color: ${colors[color][300]};
    border-color: ${colors[color][600]};
  }
`;

const defaultStyle = {
  default: css`
    background-color: #ffffff;
    border-color: ${colors.gray[300]};
    color: ${colors.gray[800]};
    &:hover {
      background-color: ${colors.gray[200]};
      border-color: ${colors.gray[500]};
    }
    &:focus {
      box-shadow: 0 0 1px 2px ${colors.gray[300]};
    }
    &:active {
      background-color: ${colors.gray[300]};
      border-color: ${colors.gray[600]};
    }
  `,
  yellow: defaultStyleBuilder('yellow'),
  skyblue: defaultStyleBuilder('skyblue'),
  blue: defaultStyleBuilder('blue'),
  orange: defaultStyleBuilder('orange'),
  denim: defaultStyleBuilder('denim'),
  purple: defaultStyleBuilder('purple'),
};

const textDisabledStyle = {
  light: css`
    background-color: transparent;
    border-color: transparent;
    color: ${colors.gray[400]};
  `,
  dark: css`
    background-color: transparent;
    border-color: transparent;
    color: ${colors.gray[700]};
  `,
};

type ExcludeColorScale = Exclude<ColorScale, 950>;

const textStyleBuilder = (color: Color, scale: ExcludeColorScale) => css`
  background-color: transparent;
  border-color: transparent;
  color: ${colors[color][scale]};
  &:hover {
    background-color: ${rgba(colors[color][scale], 0.1)};
  }
  &:focus {
    box-shadow: 0 0 1px 2px ${rgba(colors[color][scale], 0.2)};
  }
  &:active {
    background-color: ${rgba(colors[color][scale], 0.2)};
  }
`;

const textStyle = {
  light: {
    default: textStyleBuilder('gray', 800),
    yellow: textStyleBuilder('yellow', 500),
    skyblue: textStyleBuilder('skyblue', 500),
    blue: textStyleBuilder('blue', 500),
    orange: textStyleBuilder('orange', 500),
    denim: textStyleBuilder('denim', 500),
    purple: textStyleBuilder('purple', 500),
  },
  dark: {
    default: textStyleBuilder('gray', 200),
    yellow: textStyleBuilder('yellow', 500),
    skyblue: textStyleBuilder('skyblue', 500),
    blue: textStyleBuilder('blue', 500),
    orange: textStyleBuilder('orange', 500),
    denim: textStyleBuilder('denim', 500),
    purple: textStyleBuilder('purple', 500),
  },
};

const containedDisabledStyle = {
  light: css`
    background-color: ${colors.gray[300]};
    border-color: ${colors.gray[300]};
    color: ${colors.gray[500]};
  `,
  dark: css`
    background-color: ${colors.gray[700]};
    border-color: ${colors.gray[700]};
    color: ${colors.gray[600]};
  `,
};

type ExcludeContainedColorScale = Exclude<ColorScale, 800 | 900 | 950>;

const containedStyleBuilder = (color: Color, fontColor: string, scale: ExcludeContainedColorScale) => css`
  background-color: ${colors[color][scale]};
  border-color: ${colors[color][scale]};
  color: ${fontColor};
  &:hover { 
    background-color: ${colors[color][scale + 100 as ExcludeContainedColorScale]};
    border-color: ${colors[color][scale + 100 as ExcludeContainedColorScale]};
  }
  &:focus {
    box-shadow: 0 0 1px 2px ${colors[color][scale + 100 as ExcludeContainedColorScale]};
  }
  &:active {
    background-color: ${colors[color][scale + 200 as ExcludeContainedColorScale]};
    border-color: ${colors[color][scale + 200 as ExcludeContainedColorScale]};
  }
`;
const containedStyle = {
  default: css`
    background-color: #ffffff;
    border-color: #ffffff;
    color: ${colors.gray[800]};
    &:hover {
      background-color: ${colors.gray[200]};
      border-color: ${colors.gray[200]};
    }
    &:focus {
      box-shadow: 0 0 1px 2px ${colors.gray[300]};
    }
    &:active {
      background-color: ${colors.gray[300]};
      border-color: ${colors.gray[300]};
    }
  `,
  yellow: containedStyleBuilder('yellow', colors.gray[800], 500),
  skyblue: containedStyleBuilder('skyblue', '#ffffff', 500),
  blue: containedStyleBuilder('blue', '#ffffff', 500),
  orange: containedStyleBuilder('orange', '#ffffff', 500),
  denim: containedStyleBuilder('denim', '#ffffff', 500),
  purple: containedStyleBuilder('purple', '#ffffff', 500),
};

const outlinedDisabledStyle = {
  light: css`
    background-color: transparent;
    border-color: ${colors.gray[400]};
    color: ${colors.gray[400]};
  `,
  dark: css`
    background-color: transparent;
    border-color: ${colors.gray[700]};
    color: ${colors.gray[700]};
  `,
};

const outlinedStyleBuilder = (color: Color, scale: ExcludeColorScale) => css`
  background-color: transparent;
  border-color: ${colors[color][scale]};
  color: ${colors[color][scale]};
  &:hover {
    background-color: ${rgba(colors[color][scale], 0.1)};
  }
  &:focus {
    box-shadow: 0 0 1px 2px ${rgba(colors[color][scale], 0.2)};
  }
  &:active {
    background-color: ${rgba(colors[color][scale], 0.2)};
  }
`;
const outlinedStyle = {
  light: {
    default: css`
      background-color: transparent;
      border-color: ${colors.gray[800]};
      color: ${colors.gray[800]};
      &:hover {
        background-color: ${rgba(colors.gray[800], 0.1)};
      }
      &:focus {
        box-shadow: 0 0 1px 2px ${rgba(colors.gray[800], 0.2)};
      }
      &:active {
        background-color: ${rgba(colors.gray[800], 0.2)};
      }
    `,
    yellow: outlinedStyleBuilder('yellow', 500),
    skyblue: outlinedStyleBuilder('skyblue', 500),
    blue: outlinedStyleBuilder('blue', 500),
    orange: outlinedStyleBuilder('orange', 500),
    denim: outlinedStyleBuilder('denim', 500),
    purple: outlinedStyleBuilder('purple', 500),
  },
  dark: {
    default: outlinedStyleBuilder('gray', 300),
    yellow: outlinedStyleBuilder('yellow', 500),
    skyblue: outlinedStyleBuilder('skyblue', 500),
    blue: outlinedStyleBuilder('blue', 500),
    orange: outlinedStyleBuilder('orange', 500),
    denim: outlinedStyleBuilder('denim', 500),
    purple: outlinedStyleBuilder('purple', 500),
  },
};

export default Button;
