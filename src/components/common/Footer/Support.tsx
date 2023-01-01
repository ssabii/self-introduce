import React from 'react';
import { ColumnTitle, Li, Ul } from './Column';
import FooterLink from './FooterLink';
import { helpSites } from './Sites';

function Support() {
  return (
    <>
      <ColumnTitle>
        지원
      </ColumnTitle>
      <Ul>
        {helpSites.map(({ title, link, target }) => (
          <Li key={link}>
            <FooterLink
              title={title}
              link={link}
              target={target}
            />
          </Li>
        ))}
      </Ul>
    </>
  )
}

export default Support;