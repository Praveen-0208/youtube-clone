import React, { Component } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  withStyles,
  Box,
  Typography,
} from "@material-ui/core";
import sideNavBarStyles from "../../assets/styles/sideNavBarStyles";
import menus from "./utils";

class SideNavbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        className={classes.drawerContainer}
        classes={{ paper: classes.drawerPaper }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <List>
          {menus.map((menu, index) => (
            <>
              <Box
                component="div"
                key={menu.id}
                className={classes.navItemsContainer}
              >
                {menu.title && (
                  <Typography variant="h6">{menu.title}</Typography>
                )}
                {menu.children.map((menuItem, index) => (
                  <ListItem
                    button
                    key={menuItem.id}
                    className={classes.listItemStyles}
                  >
                    <ListItemIcon className={classes.iconClass}>
                      {menuItem.icon}
                    </ListItemIcon>
                    <ListItemText primary={menuItem.title} />
                  </ListItem>
                ))}
              </Box>
              {menu.divide && <Divider />}
            </>
          ))}
        </List>
      </Drawer>
    );
  }
}

export default withStyles(sideNavBarStyles)(SideNavbar);
