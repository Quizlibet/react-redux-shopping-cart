import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ShoppingItem = ({ onClick, itemName, price, imgUrl }) => (
	<>
	<ListItem salignItems="flex-start" height="large">
            <ListItemAvatar>
              	<Avatar alt={itemName} src={imgUrl}/>
          	</ListItemAvatar>
          	<ListItemText primary={itemName}
             secondary={
               <React.Fragment>
                 <Typography
                   component="span"
                   variant="body2"
                   display="inline"
                   color="textPrimary"
                 >
                   {price.toLocaleString("en-US", {style: "currency", currency: "USD"})}
                 </Typography>
                 <IconButton color="primary" onClick={onClick}>
                   <DeleteIcon />
                 </IconButton>
                 </React.Fragment>
             }
            />
    </ListItem>
    <Divider variant="inset" component="li"/>
    </>
);

ShoppingItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	itemName: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	imgUrl: PropTypes.string.isRequired
};

export default ShoppingItem;