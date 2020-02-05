import { connect } from 'react-redux';
import { addItem } from '../actions';
import StoreList from '../components/StoreList';

const mapStateToProps = state => {
	return {items: state.groceries};
}

const mapDispatchToProps = dispatch => {
	return {
		onItemClick: item => {
			dispatch(addItem(item));
		}
	}
};

const ConnectedStoreList = connect(
	mapStateToProps,
	mapDispatchToProps
)(StoreList);

export default ConnectedStoreList;