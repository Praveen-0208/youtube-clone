import * as colors from "../../constants/colors";
import * as dimensions from "../../constants/dimensions";

const headerStyles = (theme) => ({
  headerContainer: {
    height: dimensions.HEADER_HEIGHT,
  },
  toolBarContainer: {
    padding: "0 0 !important",
    backgroundColor: colors.WHITE_BACKGROUND,
    color: colors.BLACK,
  },
  imageContainer: {
    maxWidth: 90,
    maxHeigth: 20,
    objectFit: "cover",
  },
  signInButton: {
    borderRadius: 0,
    "&:hover": {
      backgroundColor: colors.WHITE_BACKGROUND,
    },
  },
  iconButtons: {
    marginRight: 15,
  },
});

export default headerStyles;
