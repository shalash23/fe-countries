export const themeOptions = (mode) => ({
  palette: {
    mode: mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#3f51b5",
          },
          secondary: {
            main: "#f50057",
          },
          background: {
            default: "hsl(0, 0%, 98%)",
          },
          text: {
            primary: "hsl(200, 15%, 8%)",
            secondary: "hsl(0, 0%, 52%)",
          },
          typography: {
            fontFamily: "Nunito Sans",
            fontWeightRegular: 300,
            fontWeightMedium: 600,
            fontWeightBold: 800,
            htmlFontSize: 12,
          },
        }
      : {
          primary: {
            main: "hsl(209, 23%, 22%)",
          },
          secondary: {
            main: "#f50057",
          },
          background: {
            default: "hsl(207, 26%, 17%)",
            paper: "hsl(209, 23%, 22%)",
          },
          text: {
            primary: "hsl(0, 0%, 100%)",
            secondary: "hsl(0, 0%, 52%)",
          },
          typography: {
            fontFamily: "Nunito Sans",
            fontWeightRegular: 300,
            fontWeightMedium: 600,
            fontWeightBold: 800,
            htmlFontSize: 14,
          },
        }),
  },
});
