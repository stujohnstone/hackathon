import React from "react";
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import NavMain from "../components/NavMain";
import NewsFeed from "../components/NewsFeed";

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
          <Grid container spacing={8}>
            <Grid item xs={12}>
               <NewsFeed></NewsFeed>
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
