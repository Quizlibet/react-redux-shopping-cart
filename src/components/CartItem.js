import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'

const ShoppingItem = ({ onClick, itemName, price, imgUrl }) => (
	<>
	<ListItem button salignItems="flex-start" height="large" onClick={onClick}>
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
                   ${price}
                 </Typography>
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