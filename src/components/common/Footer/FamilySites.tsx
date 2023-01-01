import React from 'react';
import { ColumnTitle, Li, Ul } from './Column';
import FooterLink from './FooterLink';
import { familySites } from './Sites';

function FamilySites() {
  return (
    <>
      <ColumnTitle>
        관련 사이트
      </ColumnTitle>
      <Ul>
        {familySites.map(({ title, link, target }) => (
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

export default FamilySites;