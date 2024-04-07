module.exports = {
  title: `honeyi.com`,
  description: `이하늬의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://yihoney.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `yihoney/yihoney-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `이하늬`,
    bio: {
      role: `개발자`,
      description: ['더 나은 삶을 선물하는', '문제를 찾아 개선하는', '함께하고 싶은'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/yihoney`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `109622@naver.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        date: '2024.04 ~',
        activity: '개인 블로그 운영',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/yihoney/yihoney.github.io',
          demo: 'https://yihoney.github.io',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Giveus',
        description: '블록체인 기반 의료비 지원 크라우드 펀딩 서비스입니다.',
        techStack: ['java', 'springboot'],
        thumbnailUrl: 'blog.png',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/yihoney/giveus',
          demo: 'https://giveus.site',
        },
      },
    ],
  },
};