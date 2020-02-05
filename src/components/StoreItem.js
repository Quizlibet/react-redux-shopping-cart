import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ShoppingItem = ({ onClick, itemName, price, imgUrl }) => (
	<>
		<img src={imgUrl} alt={itemName} height="80" width="80"/>
			<Typography variant="subtitle1">{itemName}</Typography> 
			<Typography variant="subtitle2">{price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</Typography>
			<Button variant="contained" color="primary" size="small" startIcon={<AddShoppingCartIcon />} onClick={onClick} alignSelf="flex-end">
				Add to cart
			</Button>
	</>
	);

ShoppingItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	itemName: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	imgUrl: PropTypes.string.isRequired,
};

export default ShoppingItem;