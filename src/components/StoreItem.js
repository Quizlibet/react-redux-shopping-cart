import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ShoppingItem = ({ onClick, itemName, price, imgUrl }) => (
	<>
	<Box component="div">
		<img src={imgUrl} alt={itemName} height="80" width="80"/>
		<Typography variant="subtitle1">{itemName}</Typography> 
		<Typography variant="subtitle2">{price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</Typography>
		<Button variant="contained" color="primary" size="small" startIcon={<AddShoppingCartIcon />} onClick={onClick}>
			Add to cart
		</Button>
	</Box>
	
	</>
	);

ShoppingItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	itemName: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	imgUrl: PropTypes.string.isRequired,
};

export default ShoppingItem;