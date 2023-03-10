export type Color = keyof typeof colors;
export type ColorScale = keyof typeof colors.gray;

const colors = {
  gray: {
    100: '#fafafc',
    200: '#f2f3f7',
    300: '#e4e5ed',
    400: '#c8cad2',
    500: '#9a9ba7',
    600: '#727585',
    700: '#555969',
    800: '#303441',
    900: '#212224',
    /**
      @description
      gray 950: android 다크모드 컬러
      논의 스레드: https://kmong.slack.com/archives/C045BGF60A2/p1665968949908889
    */
    950: '#191A1C',
  },
  yellow: {
    100: '#fffef2',
    200: '#fffad1',
    300: '#fff4ab',
    400: '#fae57c',
    500: '#ffd400',
    600: '#f5c126',
    700: '#b88a03',
    800: '#523d00',
    900: '#34290a',
  },
  orange: {
    100: '#fff8f3',
    200: '#ffecdd',
    300: '#ffd0ad',
    400: '#ffa15c',
    500: '#fb842d',
    600: '#e15f00',
    700: '#8b3c01',
    800: '#4a1f00',
    900: '#301400',
  },
  skyblue: {
    100: '#f7f9fa',
    200: '#edf2f7',
    300: '#dbe2e9',
    400: '#9bb3ca',
    500: '#4ed0fa',
    600: '#06aee4',
    700: '#426689',
    800: '#1c324f',
    900: '#172332',
  },
  blue: {
    100: '#f7f8f9',
    200: '#f0f3f7',
    300: '#bcd6f4',
    400: '#6ab0ff',
    500: '#4b94fa',
    600: '#2f72bd',
    700: '#18508f',
    800: '#0a335f',
    900: '#071e36',
  },
  denim: {
    100: '#f7fbff',
    200: '#ebf4ff',
    300: '#add3ff',
    400: '#4c91e2',
    500: '#116ad4',
    600: '#0752ab',
    700: '#053874',
    800: '#032349',
    900: '#051222',
  },
  green: {
    100: '#f7fff5',
    200: '#edfee0',
    300: '#c8ffb2',
    400: '#6ee756',
    500: '#11ca2d',
    600: '#0f9801',
    700: '#005f22',
    800: '#023500',
    900: '#001509',
  },
  red: {
    100: '#fff8f7',
    200: '#ffedeb',
    300: '#ffbab2',
    400: '#ff7262',
    500: '#ff402b',
    600: '#d52713',
    700: '#9c1101',
    800: '#470700',
    900: '#160200',
  },
  purple: {
    100: '#FAF5FF',
    200: '#F0E6FF',
    300: '#D2BEFF',
    400: '#A06EFA',
    500: '#823CE6',
    600: '#5A23AA',
    700: '#3C1478',
    800: '#23004A',
    900: '#14042E',
  },
  black: '#000000',
  white: '#ffffff',
} as const;

export default colors;
