import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Edit from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  
  layout: {
    width: '100%',
    display: 'block',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '80%'
    },
    [theme.breakpoints.up('md')]: {
      width: '65%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '45%'
    }
  },
  paper: {
    minHeight: '300px',
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: `${theme.spacing.unit}px auto`,
    backgroundColor: theme.palette.secondary.main
  },
});

class NewsFeedItem extends React.Component {
  render() {
    const { classes, children } = this.props;

    return (
      <React.Fragment>
        <main className={classes.layout}>

        <Paper className={classes.root}>
          <Avatar alt="Remy Sharp" src="dist/resources/planes.jpg" />
          <Typography variant="h5" component="h3">
            {this.props.aircraft}
          </Typography>
          <Typography component="p">
          {this.props.event_category}
          </Typography>
        </Paper>


        </main>
      </React.Fragment>
    );
  }
}

NewsFeedItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewsFeedItem);
