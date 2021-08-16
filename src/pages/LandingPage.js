import React, { Component } from "react";
import VideoCard from "../components/VideoCard";
import db from "../constants/dbMock";
import { Grid } from "@material-ui/core";

class LandingPage extends Component {
  render() {
    return (
      <Grid container direction="row">
        {db.db_mock_data.map((video) => (
          <Grid key={video.id} item xs={12} sm={6} md={6} lg={3}>
            <VideoCard data={video} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default LandingPage;
