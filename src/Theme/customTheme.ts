import { createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00927c",
    },
    secondary: {
      main: "#EAF0F1",
    },
  },
});

export default customTheme;
