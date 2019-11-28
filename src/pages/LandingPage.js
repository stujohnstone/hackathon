import React from "react";
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import NavMain from "../components/NavMain";
import HeroUnit from "../components/HeroUnit";
import ExamplePost from "../components/ExamplePost";
import Map from "../components/Map";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center'
  },
});

function LandingPage(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <NavMain>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
                <HeroUnit />
            </Grid>
            <Grid item xs={6}>
                <ExamplePost></ExamplePost>
            </Grid>
            <Grid item xs={6}>
                <Map />
            </Grid>
          </Grid>
        </div>
      </NavMain>
    </React.Fragment>
  );
};

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LandingPage);
