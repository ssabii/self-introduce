import React, { useState } from 'react'
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import SearchInput from './SearchInput';

export type SearchFormProps = {
  placeholder?: string;
  defaultValue?: string;
};

function SearchForm(props: SearchFormProps) {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <SearchFormBlock
      role="search"
      expanded={isActive}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <SearchInput {...props} />
    </SearchFormBlock>
  )
}

const SearchFormBlock = styled.form<{ expanded: boolean }>`
  margin: 0 16px;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 256px;
  transition: max-width 0.2s ease-in-out;
  position: relative;
  ${({ expanded }) => expanded
    && css`
      max-width: 344px;
    `}
`;

export default SearchForm;