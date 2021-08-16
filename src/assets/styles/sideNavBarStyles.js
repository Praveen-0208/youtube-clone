import * as dimensions from "../../constants/dimensions";

const sideNavBarStyles = (theme) => ({
  drawerContainer: {
    width: dimensions.DRAWER_WIDTH,
  },
  drawerPaper: {
    width: dimensions.DRAWER_WIDTH,
    marginTop: "56px",
    border: "none",
  },
  iconClass: {
    fontSize: dimensions.DEFAULT_ICON_SIZE,
    width: 24,
    height: 24,
  },
  navItemsContainer: {
    padding: "12px 0",
  },
  listItemStyles: {
    paddingRight: "24px",
    paddingLeft: "24px",
    height: 40,
  },
});

export default sideNavBarStyles;
