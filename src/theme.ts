import { createTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    include: { [key: string]: any };
    design: {
      font: { [key: string]: any };
      colors: { [key: string]: string };
    };
  }

  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    include: { [key: string]: any };
    design: {
      font: { [key: string]: any };
      colors: { [key: string]: string };
    };
  }
}

export const theme: any = { 
  typography: {
    fontFamily: ["Helvetica Neue"].join(","),
    fontSize: 14,
    h2: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    h3: {},
    h4: {},
    h5: {
      fontSize: "1.4rem",
    },
    h6: {},
  },
  include: {
    "@keyframes gradient": {
      from: { width: 0 },
      to: { width: "100%" },
    },
    anim: {
      zIndex: 1,
      padding: "8px 25px",
      background: "none",
      overflow: "hidden",
      position: "relative",
      verticalAlign: "middle",
      MozOsxFontSmoothing: "grayscale",
      "-webkit-backface-visibility": "hidden",
      color: "#274C77",
      borderColor: "#FFFFFF",
      transition: "border-color 0.3s, color 0.3s",
      "-webkit-transition": "border-color 0.3s, color 0.3s",
      "-webkit-transition-timing-function": "cubic-bezier(0.2, 1, 0.3, 1)",
      transitionTimingFunction: "cubic-bezier(0.2, 1, 0.3, 1)",
      border: "4px solid",
      fontWeight: 600,
      letterSpacing: "2px",
      textTransform: "uppercase",
      fontSize: 16,
      "&::before": {
        content: "''",
        position: "absolute",
        top: "0",
        left: "0",
        width: "150%",
        height: "100%",
        background: "#37474f",
        zIndex: "-1",
        WebkitTransform: "rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0)",
        transform: "rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0)",
        WebkitTransformOrigin: "0% 100%",
        transformOrigin: "0% 100%",
        WebkitTransition:
          "-webkit-transform 0.3s, opacity 0.3s, background-color 0.3s",
        transition: "transform 0.3s, opacity 0.3s, background-color 0.3s",
      },
      "&:hover, &:focus": {
        color: "#FFFFFF",
        borderColor: "#274C77",
      },
      "&:hover:before, &:focus": {
        opacity: "1",
        backgroundColor: "#274C77",
        WebkitTransform: "rotate3d(0, 0, 1, 0deg)",
        transform: "rotate3d(0, 0, 1, 0deg)",
        WebkitTransitionTimingFunction: "cubic-bezier(0.2, 1, 0.3, 1)",
        transitionTimingFunction: "cubic-bezier(0.2, 1, 0.3, 1)",
      },
    },
    title: {
      fontWeight: 600,
      letterSpacing: "2px",
    },
    subTitle: {
      fontWeight: 500,
    },
  },
  design: {
    font: {
      brandon: (weight: 400) => ({
        "font-family": '"Nunito", sans-serif',
        "font-weight": weight,
      }),
      title: '"auto-pro-new", sans-serif',
      regular: '"Nunito", sans-serif',
    },
    colors: {
      white:'#FFFFFF',
      black: "#000000",
      info: "#2F80ED",
      success: "#27AE60",
      warning: "#E2B93B",
      error: "#FF0000",
      gray90: "#000E48",
     gray80: "#5C5C5C",
     gray70:'#626262',
     gray30:'#F8F8F8',
     blue: '#2994FF'
      
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: 64,
        lineHeight: "75.14px",
      },
      h2: {
        fontSize: 40,
        lineHeight: "46.96px",
      },
      h3: {
        fontSize: 32,
        lineHeight: "37.57px",
      },
      h4: {
        fontSize: 24,
        lineHeight: "28.18px",
        fontWeight: 700,
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiChip: {
      root: {
        width: "auto",
      },
    },
    MuiOutlinedInput: {
      root: {
        minHeight: 40,
        position: "relative",
        "& $notchedOutline": {
          borderColor: "rgba(0, 0, 0, 0.23)",
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#4A90E2",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
        },
        "&$focused $notchedOutline": {
          borderColor: "rgba(255, 0, 0, 0.2)",
          boxSizing: "border-box",
          boxShadow: "0px 0px 8px rgba(255, 0, 0, 0.2)",
        },
      },
      input: {
        padding: "8px 12px",
        minHeight: 40,
        fontSize: ".9rem",
        lineHeight: "13pt",
        boxSizing: "border-box",
      },
      notchedOutline: {
        borderWidth: 0.3,
        borderStyle: "solid",
        borderColor: "#ADADAD",
        transition: "border-color box-shadow .3s",
      },
    },
  },
};

export default createTheme(theme);
