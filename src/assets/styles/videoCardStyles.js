import * as colors from "../../constants/colors";

const videoCardStyles = () => ({
  root: {
    maxWidth: 320,
    height: 274,
    boxShadow: "none",
    borderRadius: "0",
    marginLeft: "8px",
    marginRight: "8px",
    marginBottom: "8px",
  },
  media: {
    height: 153,
  },
  cardContent: {
    cursor: "pointer",
    padding: "7px 0px",
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  cardTextStyles: {
    display: "flex",
    alignItems: "center",
    fontSize: 15,
    color: colors.ICON_COLOR,
    letterSpacing: "0.1px",
  },
  listItemIconRoot: {
    minWidth: "auto",
    marginRight: 16,
  },
  listItemText: {
    fontSize: 14,
  },
});

export default videoCardStyles;
