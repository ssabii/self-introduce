import React from 'react';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import { Site } from './Sites';

function FooterLink({ title, link, target = '_self' }: Site) {
  return (
    <Paragraph>
      <Anchor
        href={link}
        target={target}
      >
        {title}
      </Anchor>
    </Paragraph>
  )
};

const Paragraph = styled.p`
  margin: 0;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.15;
  color: #555969;
  color: ${colors.gray[700]};
  text-align: inherit;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default FooterLink;