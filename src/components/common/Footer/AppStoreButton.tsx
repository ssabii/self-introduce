import React from 'react';
import Button from '../Button';
import styled from '@emotion/styled';
import colors from 'styles/colors';

function AppStoreButton() {
  return (
    <StyledButton
      target="_blank"
      href="http://itunes.apple.com/kr/app//id1039179300?mt=8"
      size="large"
      fullWidth
      startIcon={(
        <Image
          data-testid="apple-icon"
          alt="app store"
          src={`https://d2v80xjmx68n4w.cloudfront.net/assets/icon/appstore.png`}
          width={16}
          height={20}
        />
      )
      }
    >
      App Store
    </StyledButton >
  )
};

const StyledButton = styled(Button)`
  border: 1px solid ${colors.gray[800]};
`;

const Image = styled.img`
  margin-right: 4px;
`

export default AppStoreButton;