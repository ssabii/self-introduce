import styled from '@emotion/styled';
import PageContainer from 'components/common/PageContainer';
import React from 'react'
import colors from 'styles/colors';

function Info() {
  return (
    <PageContainer>
      <Table>
        <tbody>
          <tr>
            <Th>이름</Th>
            <Td>송효섭</Td>
          </tr>
          <tr>
            <Th>닉네임</Th>
            <Td>Joseph (요셉)</Td>
          </tr>
          <tr>
            <Th>팀</Th>
            <Td>Mass Market</Td>
          </tr>
          <tr>
            <Th>챕터</Th>
            <Td>Frontend</Td>
          </tr>
          <tr>
            <Th>고향</Th>
            <Td>대구</Td>
          </tr>
          <tr>
            <Th>종교</Th>
            <Td>없음</Td>
          </tr>
        </tbody>
      </Table>
    </PageContainer >
  )
};

const Table = styled.table`
  border: solid 1px ${colors.gray[300]};
  /* height: 400px; */
  margin-bottom: 8px;
  border-top: 1px solid ${colors.gray[300]};
  border-left: 1px solid ${colors.gray[300]};
  border-collapse: collapse;
  border-spacing: 0;
`;

const Th = styled.th<{ width?: string }>`
  text-align: center;
  height: 72px;
  padding: 24px;
  background-color: ${colors.gray[100]};
  border-right: 1px solid ${colors.gray[300]};
  border-bottom: 1px solid ${colors.gray[300]};
  font-size: 36px;
  font-weight: 400;
  color: ${colors.gray[800]};
  text-align: right;
`;

const Td = styled.td`
  text-align: center;
  height: 72px;
  padding: 24px; 
  border-right: 1px solid ${colors.gray[300]};
  border-bottom: 1px solid ${colors.gray[300]};
  font-size: 36px;
  font-weight: bold;
  text-align: left;
`;

export default Info;