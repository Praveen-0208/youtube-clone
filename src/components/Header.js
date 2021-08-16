import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  withStyles,
  Link,
  Grid,
  Box,
} from "@material-ui/core";
import { MdApps, MdMenu, MdNotifications, MdVideoCall } from "react-icons/md";
import headerStyles from "../assets/styles/headerStyles";
import images from "../assets/images";
import SearchBox from "./SearchBox";
import * as dimensions from "../constants/dimensions";
import * as colors from "../constants/colors";
import GoogleAvatar from "./GoogleAvatar";

class Header extends Component {
  constructor() {
    super();
    this.classes = headerStyles();
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar
          className={classes.headerContainer}
          color="secondary"
          position="sticky"
          elevation={0}
        >
          <Toolbar className={classes.toolBarContainer}>
            <Grid
              container
              direction="row"
              alignItems="center"
              style={{ padding: "0px 20px 3px 16px" }}
            >
              <Grid container item sm={3} alignItems="center">
                <Box mr={2} mb={1}>
                  <IconButton>
                    <MdMenu
                      size={dimensions.DEFAULT_ICON_SIZE}
                      color={colors.ICON_COLOR}
                    />
                  </IconButton>
                </Box>
                <Link href="/">
                  <img
                    src={images.logo}
                    alt="oops.."
                    style={{
                      width: "90px",
                      height: "20px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </Grid>
              <Grid item sm={6} alignItems="center">
                <SearchBox onChange={() => {}} placeholder="Search" />
              </Grid>
              <Grid
                container
                item
                sm={3}
                justify="flex-end"
                alignItems="center"
              >
                <IconButton className={classes.iconButtons}>
                  <MdVideoCall
                    size={dimensions.DEFAULT_ICON_SIZE}
                    color={colors.ICON_COLOR}
                  />
                </IconButton>
                <IconButton className={classes.iconButtons}>
                  <MdApps
                    size={dimensions.DEFAULT_ICON_SIZE}
                    color={colors.ICON_COLOR}
                  />
                </IconButton>
                <IconButton className={classes.iconButtons}>
                  <MdNotifications
                    size={dimensions.DEFAULT_ICON_SIZE}
                    color={colors.ICON_COLOR}
                  />
                </IconButton>
                {/* <IconButton>
                <MdMoreVert
                  size={dimensions.DEFAULT_ICON_SIZE}
                  color={colors.ICON_COLOR}
                />
              </IconButton> */}
                <GoogleAvatar initial="P" />
                {/* <Button
                className={classes.signInButton}
                color="primary"
                variant="outlined"
                size="large"
                startIcon={<MdAccountCircle />}
              >
                Sign In
              </Button> */}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(headerStyles)(Header);
