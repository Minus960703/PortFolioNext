interface MenuListProps {
  id: number;
  name_KR: string;
  name_EN: string;
  name_JP: string;
  path: string;
  [key: string]: string | number; // 인덱스 시그니처 추가
}

interface LanguageListProps {
  id: number;
  name: string;
  value: 'KR' | 'EN' | 'JP';
}

export const MenuLoginList: MenuListProps[] = [
  {
    id: 1,
    name_KR: "",
    name_EN: "PHOTO",
    name_JP: "Gym Dak",
    path: '/photo'
  },
  {
    id: 2,
    name_KR: "사진",
    name_EN: "PHOTO",
    name_JP: "Gym Dak",
    path: '/photo'
  },
]

export const MenuList: MenuListProps[] = [
  {
    id: 1,
    name_KR: "작품",
    name_EN: "Portfolio",
    name_JP: "しゃしん",
    path: '/',
    auth: ''
  },
  {
    id: 2,
    name_KR: "소개",
    name_EN: "About",
    name_JP: "れんらく",
    path: '/about',
    auth: '',
  },
  {
    id: 3,
    name_KR: "연락",
    name_EN: "Contact",
    name_JP: "れんらく",
    path: '/contact',
    auth: '',
  },
  // {
  //   id: 3,
  //   name_KR: "관리",
  //   name_EN: "ADMIN",
  //   name_JP: "かんり",
  //   path: '/admin',
  //   auth: 'admin',
  // },
];

export const LanguageList: LanguageListProps[] = [
  {
    id: 1,
    name: 'KO',
    value: 'KR'
  },
  {
    id: 2,
    name: 'EN',
    value: 'EN'
  },
  {
    id: 3,
    name: 'JP',
    value: 'JP'
  },
];