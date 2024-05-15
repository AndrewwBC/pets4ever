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

export const theme = {
  bg: "#F4f4f4",
  neutral: {
    c1: "#FFFFFF",
    c2: "#F9F9F9",
    c3: "#DEDEDE",
    c4: "#CCCCCC",
    c5: "#B1B1B1",
    c6: "#404040",
    c7: "#222222",
    c8: "#101010",
    c9: "#000000",
  },
  purple: {
    light: "#b89ff4",
    medium: "#7b44ff",
    dark: "#581de6",
  },
  yellow: {
    light: "#f6bb00",
    medium: "#e6bb52",
    dark: "#ffa500",
  },
};
