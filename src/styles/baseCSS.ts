import { css } from '@emotion/react';
import normalize from './normalize';
import metroSans from './metroSans';

const baseCSS = css`
  * {
    font-family: 'Metro Sans', sans-serif;
    box-sizing: border-box;
  }

  ${metroSans};
  ${normalize};
`;

export default baseCSS;