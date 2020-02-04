import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import VisibleShoppingCart from '../containers/VisibleShoppingCart';
import HomeComponent from '../components/HomeComponent';
import CheckOut from '../components/Checkout';

const cartWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${cartWidth}px)`,
    marginRight: cartWidth,
  },
  drawer: {
    width: cartWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: cartWidth,
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
        >
          <Toolbar>
            <Typography salignItems="flex-start" variant="h6" noWrap>
              Permanent Drawer
            </Typography>
            <div justifyContent="right">
            <Link to={'/'}>Store</Link>
            <Link to={'/checkout'}>Check Out</Link>
            </div>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path='/' component={HomeComponent}/>
          <Route path='/checkout' component={CheckOut}/>
        </Switch>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="right"
        >
          <div className={classes.toolbar}/>
          <VisibleShoppingCart />
        </Drawer>
      </div>
    </Router>
  );
}
