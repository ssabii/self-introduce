export interface Site {
  title: React.ReactNode;
  link: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
}

export const kmongSites: Site[] = [
  {
    title: '크몽 메인',
    link: 'https://www.kmong.com',
    target: '_blank'
  },
  {
    title: 'Prime',
    link: 'https://www.kmong.com/prime',
    target: '_blank'
  },
  {
    title: '엔터프라이즈',
    link: 'https://www.kmong.com/enterprise',
    target: '_blank'
  },
  {
    title: '프리랜서클럽',
    link: 'https://www.kmong.com/freelancer-club',
    target: '_blank'
  },
];

export const informationSites: Site[] = [
  {
    title: '서비스 소개',
    link: 'https://www.kmongcorp.com',
    target: '_blank',
  },
  {
    title: '인재영입',
    link: 'https://kmong.career.greetinghr.com/',
    target: '_blank',
  },
];

export const familySites: Site[] = [
  {
    title: '크몽 블로그',
    link: 'https://blog.kmong.com/',
    target: '_blank',
  },
  {
    title: '크몽 포스트',
    link: 'https://post.naver.com/kmongteam',
    target: '_blank',
  },
  {
    title: '크몽 인스타그램',
    link: 'https://www.instagram.com/kmong_official/',
    target: '_blank',
  },
  {
    title: '크몽 유튜브',
    link: 'https://www.youtube.com/channel/UCUpdmwMWbAEtK7jf_7XztAw',
    target: '_blank',
  },
];

export const helpSites: Site[] = [
  {
    title: '공지사항',
    link: 'https://support.kmong.com/hc/ko/categories/360001764912',
    target: '_blank',
  },
  {
    title: '자주 묻는 질문',
    link: 'https://support.kmong.com/hc/ko/categories/360001643071',
    target: '_blank',
  },
  {
    title: '이용약관',
    link: 'https://support.kmong.com/hc/ko/articles/900005915466',
    target: '_blank',
  },
  {
    title: <b>개인정보처리방침</b>,
    link: 'https://support.kmong.com/hc/ko/articles/9619995282713',
    target: '_blank',
  },
  {
    title: '전문가 센터',
    link: 'https://support.kmong.com/hc/ko/categories/360001839311',
    target: '_blank',
  },
];