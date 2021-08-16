import * as colors from "../../constants/colors";
import * as dimensions from "../../constants/dimensions";

const chipBarStyles = (theme) => ({
  chipBarContainer: {
    height: dimensions.HEADER_HEIGHT,
    width: "calc(100% - " + dimensions.DRAWER_WIDTH + "px)",
    borderTop: "1px solid " + colors.CHIP_BAR_BORDER_COLOR,
    borderBottom: "1px solid " + colors.CHIP_BAR_BORDER_COLOR,
    position: "fixed",
    backgroundColor: colors.WHITE_BACKGROUND,
    display: "flex",
    alignItems: "center",
    overflowY: "scroll",
    cursor: "pointer",
  },
  chipStyles: {
    border: "1px solid " + colors.CHIP_BAR_BORDER_COLOR,
    backgroundColor: colors.CHIP_BACKGROUND_COLOR,
    marginRight: 12,
    cursor: "pointer",
  },
  chipLabel: {
    fontSize: 14,
  },
  iconButtonRoot: {
    width: 32,
    heigth: 32,
  },
  leftScrollButton: {
    width: 32,
    height: 32,
    position: "relative",
    zIndex: 9999,
  },
});

export default chipBarStyles;
