import React from 'react'
import { ColumnTitle, Li, Ul } from './Column'
import FooterLink from './FooterLink'
import { informationSites } from './Sites'

function KmongInfo() {
  return (
    <>
      <ColumnTitle>
        크몽 정보
      </ColumnTitle>
      <Ul>
        {informationSites.map(({ title, link, target }) => (
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

export default KmongInfo