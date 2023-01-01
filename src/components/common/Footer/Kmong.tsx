import React from 'react';
import { ColumnTitle, Ul, Li } from './Column';
import { kmongSites } from './Sites';
import FooterLink from './FooterLink';

function KmongSection() {
  return (
    <>
      <ColumnTitle>
        크몽
      </ColumnTitle>
      <Ul>
        {kmongSites.map(({ title, link, target }) => (
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

export default KmongSection