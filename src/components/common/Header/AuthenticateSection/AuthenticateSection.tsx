import React from 'react'
import styled from '@emotion/styled';
import Button from 'components/common/Button';
import Avatar from 'components/common/Avatar/Avatar';
import Popover from 'components/common/Popover';
import Joseph from 'components/assets/joseph.jpg';

function AuthenticateSection() {
  return (
    <Actions>
      <Popover
        trigger="mouseenter"
        placement="bottom"
        content={
          <Box>
            입니다
          </Box>}
      >
        <MessageButton
          size="large"
          variant='text'
        >
          요셉
        </MessageButton>
      </Popover>
      <Popover
        trigger='mouseenter'
        placement='bottom'
        content={
          <Box>
            하기 싫다~
          </Box>
        }
      >
        <MyKmongButton size="large" variant='text'>자기소개</MyKmongButton>
      </Popover>
      <Popover
        trigger='mouseenter'
        placement='bottom-end'
        content={
          <Box>
            Frontend Engineer
          </Box>
        }
      >
        <Button
          size="large"
          variant='text'
          icon
          rounded>
          <Avatar src={Joseph} size={32} />
        </Button>
      </Popover>
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

const Box = styled.div`
  padding: 16px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.07);
`

export default AuthenticateSection;