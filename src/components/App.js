import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import ConnectedCartList from '../containers/ConnectedCartList';
import HomeComponent from '../components/HomeComponent';
import Button from '@material-ui/core/Button'
import CheckOut from '../containers/Checkout';
import Box from '@material-ui/core/Box';

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
            <Box flexGrow={1}>
            <Typography variant="h6" noWrap flexGrow={1}>
              React Redux Shopping Center
            </Typography>
            </Box>
            <Link color="primary" component={RouterLink} to="/">
              <Button variant="contained" color="primary">
                Store
              </Button>
            </Link>
            <Link component={RouterLink} to='/checkout'>
              <Button variant="contained" color="primary">
                Check Out
              </Button>
            </Link>
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
          <ConnectedCartList />
        </Drawer>
      </div>
    </Router>
  );
}
