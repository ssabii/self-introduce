import React, { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled'
import colors from 'styles/colors';
import { css } from '@emotion/react';

function ServiceNav() {
  const { pathname } = useLocation();
  const [active, setActive] = useState('');

  const handleMouseEnter = useCallback((href: string) => () => {
    setActive(href);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActive('');
  }, []);

  const isActive = (href: string) => href === active || href === pathname;

  return (
    <nav>
      <Services>
        {serviceLinks.map(({
          name, href
        }) => (
          <Service
            key={href}
            onMouseEnter={handleMouseEnter(href)}
            onMouseLeave={handleMouseLeave}
          >
            <Anchor
              href={href}
              active={isActive(href)}
            >
              {name}
            </Anchor>
            <ActiveBarWrapper>
              <ActiveBar active={isActive(href)} />
            </ActiveBarWrapper>
          </Service>
        ))}
      </Services>
    </nav>
  )
}

const serviceLinks = [
  {
    name: 'Intro',
    href: '/intro',
  },
  {
    name: 'Experience',
    href: '/experience',
  },
  {
    name: 'About Me',
    href: '/about',
  },
  {
    name: 'Outro',
    href: '/outro',
  },
]

const Services = styled.ul`
  display: flex;
  align-items: center;
  height: 48px;
  margin: 0;
  padding: 0;
`;

const Service = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  position: relative;
  margin-right: 40px;
  padding: 0;
`;

const Anchor = styled.a<{ active: boolean }>`
  color: ${colors.gray[800]};
  text-decoration: none;
  cursor: pointer;

  ${({ active }) => active && css`
    font-weight: bold;
  `};
`;

const ActiveBarWrapper = styled.div`
  height: 4px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const ActiveBar = styled.div<{ active: boolean }>`
  width: 100%;
  height: 100%;
  ${({ active }) => active && css`
    background-color: ${colors.yellow[500]};
  `}
`;

export default ServiceNav