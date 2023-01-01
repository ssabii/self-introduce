import React from 'react';
import styled from '@emotion/styled';
import { WithRequired } from 'utils/WithRequired';
import { css, keyframes } from '@emotion/react';
import colors from 'styles/colors';
import { InputSizes } from '../InputSizes';

export type InputAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export interface TextFieldProps {
  testId?: string;
  type?: string;
  size?: InputSizes;
  name?: string;
  loading?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  selectOnFocus?: boolean;
  value?: string;
  align?: InputAlign;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  placeholder?: string;
  id?: string;
  className?: string;
  error?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onKeyPress?: (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      testId,
      type = 'text',
      size = 'medium',
      name,
      disabled,
      readonly,
      required,
      value,
      align = 'left',
      prefix,
      suffix,
      placeholder,
      id,
      className,
      error,
      onChange,
      onBlur,
      onKeyPress,
      inputProps = {},
    }: TextFieldProps,
    ref,
  ) => (
    <TextFieldBlock
      className={className}
      size={size}
      error={error}
      disabled={disabled}
      readonly={readonly}
    >
      {prefix && (
        <Wrapper className="prefix-wrapper">
          {prefix}
        </Wrapper>
      )}
      <TextFieldBase
        {...testId && { 'data-testid': testId }}
        type={type}
        ref={ref}
        id={id}
        align={align}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        value={value}
        name={name}
        {...inputProps}
      />
      {suffix && (
        <Wrapper className="suffix-wrapper">
          {suffix}
        </Wrapper>
      )}
    </TextFieldBlock>
  ),
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
`

const authFill = keyframes``;

const TextFieldBase = styled.input<{ align: InputAlign }>`
  outline: none;
  flex: 1;
  width: 100%;
  background-image: none;
  box-sizing: border-box;
  font-size: inherit;
  border: none;
  font-weight: inherit;
  background-color: transparent;
  text-align: ${(props) => props.align};
  color: inherit;

  &::placeholder {
    color: ${colors.gray[400]};
  }

  &:-webkit-autofill {
    animation-duration: 5000s;
    animation: ${authFill};
  }
`;

interface InputSizeBuilderProps {
  height: number;
  fontSize: number;
  iconSize: number;
  padding: number;
  minWidth: number;
}

const inputSizeBuilder = ({
  height, fontSize, iconSize, padding, minWidth,
}: InputSizeBuilderProps) => css`
    height: ${height}px;
    font-size: ${fontSize}px;
    padding: 0 ${padding}px;
    min-width: ${minWidth}px;

    svg {
      width: ${iconSize}px;
      height: ${iconSize}px;
    }

    .prefix-wrapper {
      padding-right: ${padding / 2}px;
    }
    .suffix-wrapper {
      padding-left: ${padding / 2}px;
      justify-content: flex-end;
      flex-basis: auto;
    }
  `;

const inputSize = (size: InputSizes) => ({
  xsmall: inputSizeBuilder({
    height: 24,
    fontSize: 12,
    iconSize: 14,
    padding: 8,
    minWidth: 48,
  }),
  small: inputSizeBuilder({
    height: 32,
    fontSize: 13,
    iconSize: 16,
    padding: 10,
    minWidth: 64,
  }),
  medium: inputSizeBuilder({
    height: 36,
    fontSize: 14,
    iconSize: 18,
    padding: 12,
    minWidth: 64,
  }),
  large: inputSizeBuilder({
    height: 42,
    fontSize: 15,
    iconSize: 20,
    padding: 14,
    minWidth: 64,
  }),
  xlarge: inputSizeBuilder({
    height: 52,
    fontSize: 15,
    iconSize: 22,
    padding: 16,
    minWidth: 80,
  }),
}[size]);

const TextFieldBlock = styled.div<WithRequired<Pick<TextFieldProps, 'error' | 'disabled' | 'size' | 'readonly'>, 'size'>>`
  width: 100%;
  border: 1px solid ${colors.gray[300]};
  border-radius: 4px;
  transition: background-color 0.2s, border-color 0.2s;
  display: inline-flex;
  flex-direction: row;
  overflow: hidden;
  cursor: text;
  background-color: #ffffff;
  color: ${colors.gray[800]};

  &:hover {
    border-color: ${colors.gray[500]};
  }

  &:focus-within {
    border-color: ${colors.gray[600]};
  }

  ${(props) => inputSize(props.size)};

  ${(props) => props.error
    && css`
      border-color: ${colors.red[400]};

      &:hover,
      &:focus-within {
        border-color: ${colors.red[500]};
      }
    `}

  ${(props) => (props.disabled || props.readonly)
    && css`
      &,
      &:hover,
      &:focus-within {
        background-color: ${colors.gray[100]};
        border-color: ${colors.gray[300]};
        color: ${colors.gray[500]};
      }
      &::placeholder {
        color: ${colors.gray[400]};
      }
    `}
`;

export default TextField;
