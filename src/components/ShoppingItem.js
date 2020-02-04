import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ShoppingItem = ({ onClick, itemName, price, imgUrl }) => (
	<div>
	<img src={imgUrl} width="80" height="80" />
	<Button
		onClick={onClick}
		variant="contained"
		size="small"
		color="primary"
	>
		{itemName} ${price}
	</Button>
	</div>
	);

ShoppingItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	itemName: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	imgUrl: PropTypes.string.isRequired,
};

export default ShoppingItem;