import React from 'react';
import PropTypes from 'prop-types';
import StoreItem from './StoreItem';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const StoreList = ({ items, onItemClick }) => (
	<GridList width="100%" cols={3}>
		{items.map((item, index) => (
			<GridListTile key={index} cols={1}>
				<StoreItem {...item} onClick={() => onItemClick(item) } />
			</GridListTile>
		))}
	</GridList>
);

StoreList.propTypes = {
	items: PropTypes.arrayOf(
	    PropTypes.shape({
	      itemName: PropTypes.string.isRequired,
	      price: PropTypes.number.isRequired,
	      imgUrl: PropTypes.string.isRequired,
	    }).isRequired
	  ).isRequired,
  	onItemClick: PropTypes.func.isRequired
};

export default StoreList;