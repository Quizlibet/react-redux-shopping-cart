import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const ShoppingItem = ({ onClick, itemName, price }) => (
	<ListItem button height="large" onClick={onClick}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={itemName}/>
    </ListItem>
);

ShoppingItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	itemName: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
};

export default ShoppingItem;