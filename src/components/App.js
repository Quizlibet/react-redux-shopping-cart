import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useStyles, handleDrawerOpen, handleDrawerClose } from '../styles/UseStyles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import VisibleShoppingCart from '../containers/VisibleShoppingCart';
import VisibleItemList from '../containers/VisibleShoppingList';

export default function App() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent Drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <main
        className={classes.content}
      >
        <div className={classes.toolbar} />
        <VisibleItemList />
      </main>
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
  );
}
