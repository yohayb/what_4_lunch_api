import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FastFoodIcon from '@material-ui/icons/Fastfood';
import PollIcon from '@material-ui/icons/Poll';
import {Link} from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/places">
      <ListItemIcon>
        <FastFoodIcon />
      </ListItemIcon>
      <ListItemText primary="Places" />
    </ListItem>
    <ListItem button component={Link} to="/decisions">
      <ListItemIcon>
        <PollIcon />
      </ListItemIcon>
      <ListItemText primary="Decisions" />
    </ListItem>
  </div>
);
