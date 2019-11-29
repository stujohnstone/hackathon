import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import ReportIcon from "@material-ui/icons/Report";
import HomeIcon from "@material-ui/icons/Home";
import NotificationIcon from "@material-ui/icons/Notifications";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from 'react-router-dom';


export const mailFolderListItems = (
  <div>
    <Link to ='/home' >
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    </Link>
    <Link to ='/notifications' >
      <ListItem button>
      <ListItemIcon>
        <NotificationIcon />
      </ListItemIcon>
      <ListItemText primary="Notifications" />
      </ListItem>
    </Link>
    <Link to ='/newnotification' >
    <ListItem button>
      <ListItemIcon>
        <CreateIcon />
      </ListItemIcon>
      <ListItemText primary="New Notification" />
    </ListItem>
    </Link>
    <Link to ='/tags' >
      <ListItem button>
          <ListItemIcon>
              <CreateIcon />
          </ListItemIcon>
          <ListItemText primary="Tags" />
      </ListItem>
      </Link>
  </div>
);

