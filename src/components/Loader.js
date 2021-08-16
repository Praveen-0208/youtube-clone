import React, { Component } from "react";
import { LinearProgress } from "@material-ui/core";
import * as colors from "../constants/colors";

class Loader extends Component {
  render() {
    return <LinearProgress color={colors.RED} />;
  }
}

export default Loader;
