import { connect } from 'react-redux';
import { addItem } from '../actions';
import ItemList from '../components/ItemList';

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

const VisibleItemList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemList);

export default VisibleItemList;