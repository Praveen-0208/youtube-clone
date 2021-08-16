import React, { Component } from "react";
import { AppBar, Chip, IconButton, withStyles } from "@material-ui/core";
import chipBarStyles from "../assets/styles/chipBarStyles";
import db from "../constants/dbMock";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

class ChipBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.chipBarContainer}>
        {db.chipBarData.map((chip) => (
          <Chip
            key={chip.id}
            label={chip.title}
            className={classes.chipStyles}
            classes={{ label: classes.chipLabel }}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(chipBarStyles)(ChipBar);
