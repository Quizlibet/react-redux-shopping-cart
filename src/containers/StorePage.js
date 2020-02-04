import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useTheme, withStyles } from '@material-ui/core/styles'};
import VisibleItemList from './VisibleItemList';
import useStyles from '../styles/UseStyles';

function StorePage(props) {
	const { classes } = props;
	return (
		<main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <VisibleItemList />
      </main>
  	)
}

StorePage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StorePage);