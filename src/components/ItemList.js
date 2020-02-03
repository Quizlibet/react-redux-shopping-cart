import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShoppingItem from './ShoppingItem';
import List from '@material-ui/core/List';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const ItemList = ({ items, onItemClick }) => (
	<List>
		{items.map((item, index) => (
			<ShoppingItem key={index} {...item} onClick={() => onItemClick(item) } />
		))}
	</List>
);

ItemList.propTypes = {
	items: PropTypes.arrayOf(
	    PropTypes.shape({
	      itemName: PropTypes.string.isRequired,
	      price: PropTypes.number.isRequired
	    }).isRequired
	  ).isRequired,
  	onItemClick: PropTypes.func.isRequired
};

export default ItemList;