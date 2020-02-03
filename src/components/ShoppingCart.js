import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import CartItem from './CartItem';

const ShoppingCart = ({items, onItemClick}) => (
  <>
	<Divider />
    <List width="100%">
    	{items.map((item, index) => (
        	<CartItem key={index} {...item} onClick={() => onItemClick(item.id)}/>
          ))}
    </List>
    </>
);

ShoppingCart.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        itemName: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      }).isRequired
    ).isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default ShoppingCart;