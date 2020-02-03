import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ShoppingItem = ({ onClick, itemName, price }) => (
	<Button
		onClick={onClick}
		variant="outlined"
		size="large"
		color="primary"
	>
		{itemName} ${price}
	</Button>
)

ShoppingItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	itemName: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
}

export default ShoppingItem;