import { connect } from 'react-redux';
import { removeItem } from '../actions';
import CartList from '../components/CartList';

const mapStateToProps = state => {
	return {isCartLoading: state.isCartLoading, isCartStale: state.isCartStale, items: state.shoppingCart};
}

const mapDispatchToProps = dispatch => {
	return {
		onItemClick: id => {
			dispatch(removeItem(id));
		}
	}
}

const ConnectedCartList = connect(
	mapStateToProps,
	mapDispatchToProps
)(CartList);

export default ConnectedCartList;