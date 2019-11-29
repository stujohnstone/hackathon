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
import Comments from "../components/Comments";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    maxWidth: 100000,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  mapContainer: {
    paddingTop:"50px",
    width: "100%",
    height: "200px"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});



export const NewsFeedItem = props => {
  //const classes = useStyles();
  const { classes } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function PostHeader(props) {
    if (!!props.item.image) {
      return <CardMedia
      className={classes.media}
      image={`dist/resources/post_${props.item.image}.png`}
      title={props.item.image}
    />;
    }
    return <Map zoom='5' lat={props.item.lat} long={props.item.long}/>;
  }
  
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={`dist/resources/${props.item.user}.png`}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.item.title}
        subheader={props.item.message_date}
      />
      <PostHeader item={props.item} ></PostHeader>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{props.item.message}
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Comments comments={props.item.comments} Text='tet'></Comments>
        </CardContent>
      </Collapse>
    </Card>
  );
}

/*
NewsFeedItem.propTypes = {
  classes: PropTypes.object.isRequired
};
*/
export default withStyles(styles)(NewsFeedItem);