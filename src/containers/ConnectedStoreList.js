import { connect } from 'react-redux';
import { asyncAddItem } from '../actions';
import StoreList from '../components/StoreList';

const mapStateToProps = state => {
	return {items: state.groceries};
}

const mapDispatchToProps = dispatch => {
	return {
		onItemClick: item => {
			dispatch(asyncAddItem(item));
		}
	}
};

const ConnectedStoreList = connect(
	mapStateToProps,
	mapDispatchToProps
)(StoreList);

export default ConnectedStoreList;