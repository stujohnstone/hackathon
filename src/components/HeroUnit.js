import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

export const HeroUnit = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Typography
              variant="display3"
              align="center"
              color="textPrimary"
              gutterBottom
          >
            🏝️MALIBU🏝️
          </Typography>
          <Typography
              variant="title"
              align="center"
              color="textSecondary"
              paragraph
          >
            Always have an experienced pilot by your side

          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={16} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" onClick={handleSignUpPress}>
                  Sign Up
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary" onClick={handleLogInPress}>
                  Login
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};
function handleLogInPress(){
  window.location.assign("/signin");
}

function handleSignUpPress(){
  window.location.assign("/signup");
}


HeroUnit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeroUnit);
