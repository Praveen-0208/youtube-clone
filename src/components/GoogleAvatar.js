import React, { Component } from "react";
import * as colors from "../constants/colors";

class GoogleAvatar extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: colors.GOOGLE_AVATAR_COLOR,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: "14.3px", color: "white", fontWeight: "500" }}>
          {this.props.initial}
        </p>
      </div>
    );
  }
}

export default GoogleAvatar;
