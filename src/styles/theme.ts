import { createMuiTheme } from "@material-ui/core/styles";
// theme object is had to follow, check https://material-ui.com/customization/default-theme/?expand-path=$.palette
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#009c22",
    },
    secondary: {
      main: "#FF5110",
    },
  },
});

export default theme;
