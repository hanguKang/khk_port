export const METADATA = {
  title: "Portfolio | KHK",
  description:
    "frontend 개발자, 퍼블리셔",
  siteUrl: "https://notyet/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "나는 디자인도 개발도 해",
  "프론트엔드 개발은 즐거워",
  "사람들에게 UI/UX를 인식시켜주고 싶어",
  "좋은 경험은 사람들에게 좋은 인식을 남겨줄거야",
];

export const EMAIL = "redhangu@gmail.com";

export const SOCIAL_LINKS = {
  //linkedin: "https://not_yet",
  //github: "https://github.com/친해지면 연결해줌",
  //medium: "뭐야?",
  instagram: "https://www.instagram.com/안갈켜줌/",
  facebook: "https://www.facebook.com/안갈켜줌",
  dribbble: "https://dribbble.com/안갈켜줌",
  //behance: "https://www.behance.net/안갈켜줌/",
  //twitter: "https://twitter.com/안갈켜줌",
  //topmate: "https://www.topmate.io/안갈켜줌/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Figma Work",
    image: "/projects/figma-work.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "HTML/Tailwind, Figma 디자인 ",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.figma.com/design/QYLU8fKpXeQXf1Xt1O2WHo/app-making%2Ftest?node-id=0-1&p=f&t=Rfa8oH6GCceth6Ef-0",
    tech: ["figma", "tailwind"],
  },
  {
    name: "Website - Mvoting",
    image: "/projects/mvoting.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "서울 시민을 위한 투표 사이트",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://mvoting.seoul.go.kr/mvoting/voting/hotissue/selectPageListHotissue.do",
    tech: ["react", "gsap", "typescript", "sass"],
  },
  {
    name: "Website - 서울노동포털",
    image: "/projects/seoul_labor.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "서울 노동자들을 위한 포털사이트",
    gradient: ["#245B57", "#004741"],
    url: "https://www.seoullabor.or.kr/portal/main/main.do",
    tech: ["react", "typescript", "gulp", "sass"],
  },
  {
    name: "Website - 광진구청",
    image: "/projects/kwangjin.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "광진구 시민들을 위한 구청 서비스",
    gradient: ["#003052", "#167187"],
    url: "https://www.gwangjin.or.kr/web/main.do",
    tech: ["react", "figma", "gsap", "sass"],
  },
  {
    name: "Website - 한국장애인고용공단",
    image: "/projects/hankuk.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Marketing site for OKR Platform by huminos",
    gradient: ["#5E4C06", "#746528"],
    url: "https://www.kead.or.kr/",
    tech: ["gulp", "typescript", "sass"],
  },

];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    //"redux",
    //"next",
    //"angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "운영 과 개발",
    size: ItemSize.SMALL,
    subtitle:
      "cms si 웹접근성 단순하다",
    slideImage: "/timeline/si_sm.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "다양함",
    size: ItemSize.SMALL,
    subtitle:
      "여러 회사와 여러 학원에서 일을 같이 하자고 하다",
    slideImage: "/timeline/sol_talk.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX 엔지니어링",
    size: ItemSize.SMALL,
    subtitle:
      "회사에서 파견 나가서 보안관리 아래서 열심히 하는 사람이 되다",
    image: "/timeline/ntsys.svg",
    slideImage: "/timeline/secure.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "세상과 반가운 인사",
    size: ItemSize.SMALL,
    subtitle: "소소한 능력이라도 세상과 소통하다",
    slideImage: "/timeline/office.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Figma ",
    size: ItemSize.SMALL,
    subtitle:
      "Adobe의 photoshop와 illustrator를 대신할 툴을 만나다",
    slideImage: "/timeline/figma.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "NCS 직무 자격",
    size: ItemSize.SMALL,
    subtitle:
      "NCS직무에 맞는 자격을 갇도록 나라에서 관리를 하다. ",
    slideImage: "/timeline/NCS_certificate.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "국가직무능력표준 NCS 시작",
    size: ItemSize.SMALL,
    subtitle:
    "모든 사람이 어디에서 무엇을 배워도 평등하게 배우는 방식을 도입",

    slideImage: "/timeline/NCS.jpeg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2015",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "KISA 개인정보보호",
    size: ItemSize.SMALL,
    subtitle:
      "개인정보보호를 위해 모든 에이전시를 중심으로 DB 보안 등을 점검하는 프로모션 사이트를 진행하다",
    slideImage: "/timeline/secure_ico.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "java와 마주하다",
    size: ItemSize.SMALL,
    subtitle:
      "아모제 푸드시스템의 CMS 개발에 참여하고 이클립스를 만져보다 새로운 세상",
    slideImage: "/timeline/amoje.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "프리랜서",
    size: ItemSize.SMALL,
    subtitle:
      "내가 가는 길을 더 잘알기 위해서 혼잡한 도로로 뛰어들다",
    slideImage: "/timeline/agency.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "더 배워야 해",
    size: ItemSize.SMALL,
    subtitle:
      "디자인과, hmtl, css, svg 애니메이션 더하기 vanillascript를 시작하다",

    slideImage: "/timeline/vanilla_js.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2013",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "jQuery 라이브러리",
    size: ItemSize.SMALL,
    subtitle:
      "사람들이 jQUERY에 빠져들기 시작하다 ",
    slideImage: "/timeline/jquery.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "웹표준과 웹접근성",
    size: ItemSize.SMALL,
    subtitle:
      "국외에서부터 시작한 모두가 평등하게 이용하는 웹을 나부터 시작해서 함께하기",
    slideImage: "/timeline/gr_lect.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2012",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "교육을 시작하다",
    size: ItemSize.SMALL,
    subtitle: "중국에서의 경험을 토대로 한국에서 웹의 길을 지속하다.",
    slideImage: "/timeline/thejoeun_lect.jpeg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX, web publish",
    size: ItemSize.SMALL,
    subtitle:
      "연길직업고중 “중국직업교육 100강”에 입선 웹페이지 디자인 타이포의 즐거움 - 웹과 디자인",
    image: "/timeline/yeon.svg",
    slideImage: "/timeline/yeon.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2011",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "web 그 시작",
    size: ItemSize.LARGE,
    subtitle:
      "처음 웹표준을 접한 그 순간 이제 easywork tool을 버릴 때가 왔다.",
    image: "/timeline/bro_1.svg",
    slideImage: "/timeline/browser.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
