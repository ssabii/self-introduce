import React from 'react';
import Button from '../Button';
import styled from '@emotion/styled';
import colors from 'styles/colors';

function GooglePlayButton() {
  return (
    <StyledButton
      target="_blank"
      href="https://play.google.com/store/apps/details?id=com.kmong.kmong"
      size="large"
      fullWidth
      startIcon={(
        <Image
          data-testid="android-icon"
          alt="google play"
          src={`https://d2v80xjmx68n4w.cloudfront.net/assets/icon/googleplay.png`}
          width={20}
          height={20}
        />
      )}
    >
      Google play
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  border: 1px solid ${colors.gray[800]};
`;

const Image = styled.img`
  margin-right: 4px;
`

export default GooglePlayButton;