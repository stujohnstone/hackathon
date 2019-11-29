import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Map from "../components/Map";
import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';

const styles = theme => ({
  card: {
    maxWidth: 100000,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

const divStyle = {
  padding: '2px'
};


export const Comment = props => {
  //const classes = useStyles();
  const { classes } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(props);
  
  return (
    props.comments.map((comment,i) => <div style={divStyle}>
      
      <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={`dist/resources/${comment.user}.png`}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={comment.user}
        subheader={comment.comment_date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{comment.comment}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>

      </div>)
  );
}

/*
NewsFeedItem.propTypes = {
  classes: PropTypes.object.isRequired
};
*/
export default withStyles(styles)(Comment);