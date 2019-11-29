import React from "react";
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import NavMain from "../components/NavMain";
import HeroUnit from "../components/HeroUnit";
import ExamplePost from "../components/ExamplePost";
import Map from "../components/Map";
import Typography from "@material-ui/core/Typography";
import MusicPlayer from "../components/MusicPlayer";



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center'
  },
});




export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <HeroUnit/>
<MusicPlayer/>
      </React.Fragment>
    );
  }
}

export default  withStyles(styles)(LandingPage);

