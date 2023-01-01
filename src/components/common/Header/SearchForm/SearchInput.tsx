import React, { useMemo, useState } from 'react'
import styled from '@emotion/styled';
import TextField, { TextFieldProps } from 'components/common/TextField';
import Icon from 'components/common/Icon';
import colors from 'styles/colors';

export type SearchInputProps = TextFieldProps;

function SearchInput(props: SearchInputProps) {
  const [value, setValue] = useState("");
  const [showClear, setShowClear] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
    setShowClear(e.target.value.length > 0);
  }

  const Suffix = useMemo(() => {
    if (showClear) {
      const clearValue = () => {
        setValue("");
        setShowClear(false);
      }

      return <ClearButton onClick={clearValue}>
        <Icon name="CLOSE" />
      </ClearButton>;
    }

    return <Icon name="SEARCH" />;
  }, [showClear]);

  return (
    <StyledSearchInput
      {...props}
      inputProps={{
        maxLength: 30,
        autoComplete: 'off',
        autoCorrect: 'off',
        autoCapitalize: 'off',
      }}
      testId="search-input"
      size="large"
      value={value}
      onChange={handleChange}
      suffix={Suffix}
    />
  )
}

const StyledSearchInput = styled(TextField)`
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 20px;
  font-size: 14px;
`;

const ClearButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: ${colors.gray[300]};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: ${colors.gray[400]};
  }

  svg {
    width: 14px;
    height: 14px;
    color: #ffffff;
  }
`;

export default SearchInput