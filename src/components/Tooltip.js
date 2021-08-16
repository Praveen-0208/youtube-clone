import React, { Component } from "react";
import { Tooltip as ToolTipComponent, withStyles } from "@material-ui/core";
import toolTipStyles from "../assets/styles/toolTipStyles";
class Tooltip extends Component {
  render() {
    const { classes } = this.props;

    return (
      <ToolTipComponent
        classes={{ tooltip: classes.tooltip }}
        placeholder="bottom-start"
        title={this.props.title}
      >
        {this.props.children}
      </ToolTipComponent>
    );
  }
}

export default withStyles(toolTipStyles)(Tooltip);
