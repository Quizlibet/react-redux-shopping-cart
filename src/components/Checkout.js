import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';
import HomeComponent from './HomeComponent';

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }));

export default function CheckOut() {
    const classes = useStyles();
    return (
        <main className={classes.content}>	
            <div className={classes.toolbar}/>
            <Typography salignItems="flex-start" variant="h6" noWrap>
                Permanent Drawer
            </Typography>
            <Button variant="contained" span="100%">Check Out</Button>
            <Router><Link to={"/"} className="nav-link">Return to Store</Link></Router>
            
        </main>
    );
}