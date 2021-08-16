import React, { Component } from "react";
import {
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  withStyles,
  Avatar,
  Box,
  IconButton,
  MenuItem,
  ListItemIcon,
  Menu,
  Divider,
} from "@material-ui/core";
import { MdMoreVert, MdCheckCircle } from "react-icons/md";
import videoCardStyles from "../assets/styles/videoCardStyles";
import * as colors from "../constants/colors";
import db from "../constants/dbMock";

import Tooltip from "./Tooltip";

class VideoCard extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      open: false,
      showMenu: false,
    };
  }
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget, open: true });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={this.state.open}
          onClose={this.handleClose}
        >
          {db.dropdownMenu.map((menu, index) => (
            <div>
              <MenuItem key={menu.id}>
                <ListItemIcon className={classes.listItemIconRoot}>
                  {menu.icon}
                </ListItemIcon>
                <Typography variant="inherit" className={classes.listItemText}>
                  {menu.title}
                </Typography>
              </MenuItem>
              {index == 2 && <Divider />}
            </div>
          ))}
        </Menu>
        <Paper elevation={0}>
          <Card
            className={classes.root}
            onMouseOver={() => {
              this.setState({ showMenu: true });
            }}
            onMouseLeave={() => {
              this.setState({ showMenu: false });
            }}
          >
            <CardMedia
              className={classes.media}
              image={this.props.data.videoLink}
            />
            <CardContent className={classes.cardContent}>
              <Box
                display="flex"
                flexWrap="nowrap"
                justifyContent="space-between"
              >
                <Box>
                  <Avatar alt="no img" src={this.props.data.channelLogo} />
                </Box>
                <Box ml={1}>
                  <div
                    style={{
                      width: "calc(100%)",
                      height: "47px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <Tooltip title={this.props.data.title}>
                      <Typography className={classes.titleStyle}>
                        {this.props.data.title}
                      </Typography>
                    </Tooltip>
                  </div>
                  <Typography className={classes.cardTextStyles}>
                    {this.props.data.channelName}&nbsp;
                    {this.props.data.isVerified && (
                      <MdCheckCircle size={14} color={colors.ICON_COLOR} />
                    )}
                  </Typography>
                  <Typography className={classes.cardTextStyles}>
                    {this.props.data.views} views . {this.props.data.uploadedOn}
                  </Typography>
                </Box>
                <Box
                  style={this.state.showMenu ? {} : { visibility: "hidden" }}
                >
                  <IconButton onClick={this.handleClick}>
                    <MdMoreVert size={24} color={colors.ICON_COLOR} />
                  </IconButton>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Paper>
      </>
    );
  }
}

export default withStyles(videoCardStyles)(VideoCard);
