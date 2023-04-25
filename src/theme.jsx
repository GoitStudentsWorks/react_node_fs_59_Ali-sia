export const theme = {
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    laptop: '1440px',
  },

  space: [0, 2, 4, 8, 14, 16, 24, 32, 40, 64, 128],

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '2px solid',

    addTaskBTN: '1px dashed #3E85F3',
    input: '1px solid rgba(220, 227, 229, 0.6)',
  },

  radii: {
    none: '0',
    light: '8px',
    normal: '16px',
    round: '50%',
  },

  shadows: {
    box: '0px 4px 16px rgba(17, 17, 17, 0.1)',
    loginBtn: '4px 2px 16px rgba(136, 165, 191, 0.48);',
    headerText:
      '0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);',
  },

  fonts: {
    main: 'Inter',
    secondary: 'Coolvetica',
  },

  fontSizes: {
    xxs: '10px',
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',

    logo: '24px',
    heading: '32px',
  },

  fontWeights: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  lineHeights: {},

  letterSpacings: {},

  opacities: {},

  sizes: {},

  borderStyles: {},

  borderWidths: {},

  transitions: {},

  zIndices: {},
};

export const light = {
  white: '#FFFFFF',
  black: '#111111',

  bgcLogin: 'rgba(220, 235, 247, 1)',

  primary: 'rgba(62, 133, 243, 1)',
  secondary: '#E3F3FF',

  taskMainLow: 'rgba(114, 194, 248, 1)',
  taskMainMedium: 'rgba(243, 178, 73, 1)',
  taskMainHigh: 'rgba(234, 61, 101, 1)',

  taskSecondaryLow: 'rgba(206, 238, 253, 1)',
  taskSecondaryMedium: 'rgba(252, 240, 212, 1)',
  taskSecondaryHigh: 'rgba(255, 210, 221, 1)',

  btnMain: 'rgba(227, 243, 255, 1)',
  btnAccent: 'rgba(202, 232, 255, 1)',

  btnCloseSideBarTheme: '#343434',

  textMainTheme: 'rgba(17, 17, 17, 1)',
  userPanelTextTheme: 'rgba(126, 125, 130, 1)',

  textHeaderTheme: '#111111',

  textLogoTheme: '#3E85F3',

  bgcMainTheme: 'rgba(247, 246, 249, 1)',
  bgcSecondaryTheme: 'rgba(255, 255, 255, 1)',

  bgcInputTheme: 'rgba(246, 246, 246, 1)',

  bgcSideBarTheme: '#FFFFFF',

  taskBorderTheme: 'rgba(220, 227, 229, 0.8)',

  calendarDayNameAtMonth: 'rgba(97, 97, 97, 1)',
  calendarDayNumbers: 'rgba(52, 52, 52, 1)',
  borderDayMonthSelector: 'rgba(62, 133, 243, 0.2)',
  bgDayMonthSelector: 'rgba(227, 243, 255, 1)',
  bgActiveBtnDayMonthSelector: 'rgba(202, 232, 255, 1)',
  textActiveDayMonthSelector: 'rgba(62, 133, 243, 1)',
  moreTaskLabel: 'grey',
};

export const dark = {
  white: '#FFFFFF',
  black: '#111111',

  bgcLogin: 'rgba(220, 235, 247, 1)',

  primary: 'rgba(62, 133, 243, 1)',
  secondary: '#E3F3FF',

  taskMainLow: 'rgba(114, 194, 248, 1)',
  taskMainMedium: 'rgba(243, 178, 73, 1)',
  taskMainHigh: 'rgba(234, 61, 101, 1)',

  taskSecondaryLow: 'rgba(206, 238, 253, 1)',
  taskSecondaryMedium: 'rgba(252, 240, 212, 1)',
  taskSecondaryHigh: 'rgba(255, 210, 221, 1)',

  btnMain: 'rgba(227, 243, 255, 1)',
  btnAccent: 'rgba(202, 232, 255, 1)',

  btnCloseSideBarTheme: '#FFFFFF',

  textMainTheme: 'rgba(255, 255, 255, 1)',
  userPanelTextTheme: 'rgba(250, 250, 250, 0.3)',

  textHeaderTheme: '#FFFFFF',

  textLogoTheme: '#E3F3FF',

  bgcMainTheme: 'rgba(23, 24, 32, 1)',
  bgcSecondaryTheme: 'rgba(33, 34, 44, 1)',

  bgcInputTheme: 'rgba(255, 255, 255, 0.15)',

  bgcSideBarTheme: '#13151A',

  taskBorderTheme: 'rgba(255, 255, 255, 0.15)',

  calendarDayNameAtMonth: 'rgba(255, 255, 255, 1)',
  calendarDayNumbers: 'rgba(255, 255, 255, 1)',
  borderDayMonthSelector: 'none',
  bgDayMonthSelector: 'rgba(33, 34, 44, 1)',
  bgActiveBtnDayMonthSelector: 'rgba(62, 133, 243, 1)',
  textActiveDayMonthSelector: 'rgba(255, 255, 255, 1)',
  moreTaskLabel: 'grey',
};
