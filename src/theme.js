import { createMuiTheme } from "@material-ui/core";
import * as colors from "./constants/colors";

const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        width: 40,
        height: 40,
        padding: 8,
      },
    },
    MuiListItemText: {
      primary: {
        fontSize: 14,
        color: colors.MENU_ITEM_COLOR,
      },
    },
    MuiListItemIcon: {
      root: {
        color: colors.ICON_COLOR,
        padding: 1,
      },
    },
    MuiAvatar: {
      root: {
        width: 36,
        height: 36,
      },
    },
  },
});

export default theme;
