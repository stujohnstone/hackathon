import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import NewsFeed from '../components/NewsFeed';

export const HomePage = () => {
  return (
    <main>
    <div>
      <Typography
          variant="h1"
          align="center"
          color="textPrimary"
          gutterBottom
      >
        🏝️MALIBU🏝️
      </Typography>
      <Typography
          variant="h3"
          align="center"
          color="textSecondary"
          paragraph
      >
        Fly with confidence, fly with Malibu
      </Typography>
      <NewsFeed />
    </div>
    </main>
  )
}

export default HomePage;