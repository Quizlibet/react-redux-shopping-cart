import { ADD_ITEM, REMOVE_ITEM, REQUEST_CHECKOUT, COMPLETE_CHECKOUT, REFRESH_CART } from '../actions';

const initialState = {
	isCartLoading: false,
	isCartStale: false,
	shoppingCart: [],
	groceries: [
		{
			itemName: "Potatoes",
			price: 1.5,
			imgUrl: "../images/potatoes.jpg",
		},
		{
			itemName: "Carrots",
			price: 1,
			imgUrl: "../images/carrots.jpg",
		},
		{
			itemName: "Onions",
			price: 0.7,
			imgUrl: "../images/onions.jpg",
		},
		{
			itemName: "Leeks",
			price: 0.8,
			imgUrl: "../images/leeks.jpg",
		},
		{
			itemName: "Eggs",
			price: 2.1,
			imgUrl: "../images/eggs.jpg",
		},

	]
};

function rootReducer(state = initialState, action) {
	switch(action.type) {
		case ADD_ITEM:
			return Object.assign({}, state, { isCartLoading: false, isCartStale: false, shoppingCart: [...state.shoppingCart, {id: action.id, ...action.payload}]});
		case REMOVE_ITEM:
			return Object.assign({}, state, { isCartLoading: false, isCartStale: false, shoppingCart: state.shoppingCart.filter(item => item.id !== action.id)});
		case REFRESH_CART:
			return Object.assign({}, state, { isCartStale: true });
		case REQUEST_CHECKOUT:
			return Object.assign({}, state, { isCartLoading: true, isCartStale: false });
		case COMPLETE_CHECKOUT:
			return Object.assign({}, state, { isCartLoading: false, isCartStale: false, shoppingCart: []})
		default: 
			return state;
	}
};

export default rootReducer;