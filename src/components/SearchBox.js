import React, { Component } from "react";
import {
  TextField,
  withStyles,
  Button,
  IconButton,
  Divider,
  Box,
} from "@material-ui/core";
import searchBoxStyles from "../assets/styles/searchBoxStyles";
import { MdMic, MdSearch } from "react-icons/md";
import * as colors from "../constants/colors";
import * as dimensions from "../constants/dimensions";

class SearchBox extends Component {
  changeBorderColor = (color, type) => {
    let searchContainer = document.getElementById("search-input");
    searchContainer.style.border = "1px solid " + color;
    type === "blur"
      ? (searchContainer.style.boxShadow = "")
      : (searchContainer.style.boxShadow =
          " -5px 16px 3px -15px rgba(84,81,81,0.47) inset");
  };
  render() {
    const { classes } = this.props;
    return (
      <Box id="search-container">
        <Box id="input-container">
          <Box id="search-input">
            <TextField
              value={this.props.value}
              onChange={(event) => {
                this.props.onChange(event);
              }}
              fullWidth
              placeholder={this.props.placeholder}
              InputProps={{ disableUnderline: true }}
              className={classes.search}
              onFocus={(event) => {
                this.changeBorderColor(colors.SEARCHBOX_BORDER_FOCUS);
              }}
              onBlur={(event) => {
                this.changeBorderColor(colors.SEARCHBOX_BORDER, "blur");
              }}
            />
          </Box>
          <Divider orientation="vertical" />
          <Button disableRipple={true} className={classes.searchButton}>
            <MdSearch size={20} color={colors.ICON_COLOR} />
          </Button>
        </Box>
        <IconButton style={{ height: "100%" }}>
          <MdMic
            size={dimensions.DEFAULT_ICON_SIZE}
            color={colors.ICON_COLOR}
          />
        </IconButton>
      </Box>
    );
  }
}

export default withStyles(searchBoxStyles)(SearchBox);
