import * as colors from "../../constants/colors";

const tooltipStyles = (theme) => ({
  tooltip: {
    backgroundColor: colors.WHITE_BACKGROUND,
    color: "rgba(0, 0, 0, 0.87)",
    borderRadius: 0,
    border: "1px solid " + colors.ICON_COLOR,
    fontSize: 13,
  },
});

export default tooltipStyles;
