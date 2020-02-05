import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartItem from './CartItem';

const CartList = ({items, onItemClick}) => (
  <>
	<Divider />
    <List width="100%">
      <ListItem>
        <ShoppingCartIcon/>
        <ListItemText primary= {
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              display="inline"
              color="textPrimary"
            >
            ( {items.length} )
            </Typography>
          </React.Fragment>
        } />
      </ListItem>
    	{items.map((item, index) => (
        	<CartItem key={index} {...item} onClick={() => onItemClick(item.id)}/>
          ))}
      <ListItem>
        <ListItemText primary={
          <React.Fragment>
            <Typography
              component="span"
              variant="subtitle2"
              display="inline"
              color="textPrimary"
            >
            Total: {
              items.reduce((accum, current) => {return accum + current.price}, 0)
                .toLocaleString("en-US", {style: "currency", currency: "USD"})}
            </Typography>
          </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </>
  
);

CartList.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        itemName: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imgUrl: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default CartList;