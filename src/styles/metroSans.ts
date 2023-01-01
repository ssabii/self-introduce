import { css } from '@emotion/react';

const CLOUDFRONT_URL = 'https://d2v80xjmx68n4w.cloudfront.net';

const MetroSansPath = `${CLOUDFRONT_URL}/assets/fonts/MetroSans`;

const metrosans = css`
  @font-face {
    font-family: 'Metro Sans';
    font-style: normal;
    font-weight: 900;
    src: url(${MetroSansPath}/MetroSans-Black.woff2) format('woff2'),
        url(${MetroSansPath}/MetroSans-Black.woff) format('woff'),
        url(${MetroSansPath}/MetroSans-Black.otf) format('truetype'), url(${MetroSansPath}/MetroSans-Black.eot),
        url(${MetroSansPath}/MetroSans-Black.eot?#iefix) format('embedded-opentype');
  }
  @font-face {
    font-family: 'Metro Sans';
    font-style: normal;
    font-weight: 700;
    src: url(${MetroSansPath}/MetroSans-Bold.woff2) format('woff2'),
        url(${MetroSansPath}/MetroSans-Bold.woff) format('woff'),
        url(${MetroSansPath}/MetroSans-Bold.otf) format('truetype'), url(${MetroSansPath}/MetroSans-Bold.eot),
        url(${MetroSansPath}/MetroSans-Bold.eot?#iefix) format('embedded-opentype');
  }
  @font-face {
    font-family: 'Metro Sans';
    font-style: normal;
    font-weight: 500;
    src: url(${MetroSansPath}/MetroSans-Medium.woff2) format('woff2'),
        url(${MetroSansPath}/MetroSans-Medium.woff) format('woff'),
        url(${MetroSansPath}/MetroSans-Medium.otf) format('truetype'), url(${MetroSansPath}/MetroSans-Medium.eot),
        url(${MetroSansPath}/MetroSans-Medium.eot?#iefix) format('embedded-opentype');
  }
  @font-face {
    font-family: 'Metro Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${MetroSansPath}/MetroSans-Regular.woff2) format('woff2'),
        url(${MetroSansPath}/MetroSans-Regular.woff) format('woff'),
        url(${MetroSansPath}/MetroSans-Regular.otf) format('truetype'), url(${MetroSansPath}/MetroSans-Regular.eot),
        url(${MetroSansPath}/MetroSans-Regular.eot?#iefix) format('embedded-opentype');
  }
  @font-face {
    font-family: 'Metro Sans';
    font-style: normal;
    font-weight: 300;
    src: url(${MetroSansPath}/MetroSans-Light.woff2) format('woff2'),
        url(${MetroSansPath}/MetroSans-Light.woff) format('woff'),
        url(${MetroSansPath}/MetroSans-Light.otf) format('truetype'), url(${MetroSansPath}/MetroSans-Light.eot),
        url(${MetroSansPath}/MetroSans-Light.eot?#iefix) format('embedded-opentype');
  }
`;

export default metrosans;
