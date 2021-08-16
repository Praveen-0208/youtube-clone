import * as colors from "../../constants/colors";

const searchBoxStyles = (theme) => ({
  search: {
    paddingLeft: 10,
  },
  searchButton: {
    height: "100%",
    color: colors.SEARCH_ICON_COLOR,
    opacity: 0.6,
    "&:hover": {
      color: colors.SEARCH_ICON_HOVER,
      opacity: 1,
    },
  },
});

export default searchBoxStyles;
