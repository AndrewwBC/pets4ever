export interface MyThemeProps {
  bg: string;
  neutral: {
    c1: string;
    c2: string;
    c3: string;
    c4: string;
    c5: string;
    c6: string;
    c7: string;
    c8: string;
    c9: string;
  };
  purple: {
    light: string;
    medium: string;
    dark: string;
  };
  yellow: {
    light: string;
    medium: string;
    dark: string;
  };
}

export const lightTheme = {
  bg: "#fff",
  neutral: {
    c1: "#FFFFFF",
    c2: "#F9F9F9",
    c3: "#E9E9E9",
    c4: "#CCCCCC",
    c5: "#B1B1B1",
    c6: "#404040",
    c7: "#222222",
    c8: "#101010",
    c9: "#000000",
  },
  purple: {
    light: "#B108F3",
    medium: "#8A05BE",
    dark: "#7B04A9",
  },
  yellow: {
    light: "#f6bb00",
    medium: "#e6bb52",
    dark: "#ffa500",
  },
  boxShadowStyle: "1px 2px 6px #d0d0d0, -5px -5px 1px #f0f0f0",
};

export const darkTheme = {
  bg: "#111",
  neutral: {
    c1: "#000000", // c9
    c2: "#101010", // c8
    c3: "#222222", // c7
    c4: "#404040", // c6
    c5: "#B1B1B1", // c5 (permanece o mesmo)
    c6: "#CCCCCC", // c4
    c7: "#DEDEDE", // c3
    c8: "#F9F9F9", // c2
    c9: "#FFFFFF", // c1
  },
  purple: {
    light: "#B108F3",
    medium: "#8A05BE",
    dark: "#7B04A9",
  },
  yellow: {
    light: "#f6bb00",
    medium: "#e6bb52",
    dark: "#ffa500",
  },
  boxShadow: null,
};

export const theme = lightTheme;
