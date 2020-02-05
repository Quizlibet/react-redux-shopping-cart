   	import React from 'react';
	import { makeStyles } from '@material-ui/core';
    import ConnectedStoreList from '../containers/ConnectedStoreList';

	const useStyles = makeStyles(theme => ({
		toolbar: theme.mixins.toolbar,
		content: {
		  flexGrow: 1,
		  backgroundColor: theme.palette.background.default,
		  padding: theme.spacing(3),
		},
	  }));

    export default function HomeComponent() {
		const classes = useStyles();
		return (
			<main className={classes.content}>	
				<div className={classes.toolbar}/>
				<ConnectedStoreList />
			</main>
		);
    }