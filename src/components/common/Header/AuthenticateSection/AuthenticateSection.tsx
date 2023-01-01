import React from 'react'
import styled from '@emotion/styled';
import Button from 'components/common/Button';
import Avatar from 'components/common/Avatar/Avatar';
import Joseph from 'components/assets/images/joseph.jpg';

function AuthenticateSection() {
  return (
    <Actions>
      <MessageButton size="large" variant='text' >메시지</MessageButton>
      <MyKmongButton size="large" variant='text'>마이크몽</MyKmongButton>
      <Button
        size="large"
        variant='text'
        icon
        rounded>
        <Avatar src={Joseph} size={32} />
      </Button>
    </Actions>
  );
}

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MessageButton = styled(Button)`
  margin-right: 4px;

  span {
    line-height: 1;
    font-weight: 500;
  }
`;

const MyKmongButton = styled(Button)`
  margin-right: 16px;

  span {
    line-height: 1;
    font-weight: 500;
  }
`;

export default AuthenticateSection;