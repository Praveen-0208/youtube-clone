import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Routes from "./routes.js";
import "fontsource-roboto";
import Loader from "./components/Loader.js";
import SideNavbar from "./components/sideNavBar/SideNavbar.js";

import { Box, makeStyles } from "@material-ui/core";
import * as dimensions from "./constants/dimensions";
import ChipBar from "./components/ChipBar.js";

const useStyles = makeStyles((theme) => ({
  outerBox: {
    margin: 0,
    padding: 0,
  },
  mainContent: {
    marginLeft: dimensions.DRAWER_WIDTH,
    paddingTop: 10,
  },
  pageLayout: {
    marginTop: dimensions.HEADER_HEIGHT + 20,
    marginRight: 20,
    marginLeft: 20,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Header>
        <Box flexDirection="row" className={classes.outerBox}>
          <Box>
            <SideNavbar />
          </Box>

          {/* <Loader /> */}
          <Box className={classes.mainContent}>
            <Box>
              <ChipBar />
            </Box>
            <Box className={classes.pageLayout}>
              <Router>
                <Switch>
                  {Routes.map((route) => (
                    <Route
                      exact={route.exact}
                      key={route.path}
                      path={route.path}
                      component={route.component}
                    ></Route>
                  ))}
                </Switch>
              </Router>
            </Box>
          </Box>
        </Box>
      </Header>
    </Fragment>
  );
};

export default App;
