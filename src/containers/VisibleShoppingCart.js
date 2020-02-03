import { connect } from 'react-redux';
import { removeItem } from '../actions';
import ShoppingCart from '../components/ShoppingCart';

const mapStateToProps = state => {
	return {items: state.shoppingCart};
}

const matchDispatchToProps = dispatch => {
	return {
		onItemClick: id => {
			dispatch(removeItem(id));
		}
	}
}

const VisibleShoppingCart = connect(
	mapStateToProps,
	matchDispatchToProps
)(ShoppingCart);

export default VisibleShoppingCart;