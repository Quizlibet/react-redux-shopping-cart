import { ADD_ITEM, REMOVE_ITEM, CHECK_OUT } from '../actions';

const initialState = {
	shoppingCart: [],
	groceries: [
		{
			itemName: "Potatoes",
			price: 1.3,
			imgUrl: "../images/potatoes.jpg",
		},
		{
			itemName: "Carrots",
			price: 1.3,
			imgUrl: "../images/carrots.jpg",
		},
		{
			itemName: "Onions",
			price: 1.3,
			imgUrl: "../images/onions.jpg",
		},
		{
			itemName: "Leeks",
			price: 1.3,
			imgUrl: "../images/leeks.jpg",
		},
		{
			itemName: "Eggs",
			price: 1.3,
			imgUrl: "../images/eggs.jpg",
		},

	]
};

function rootReducer(state = initialState, action) {
	switch(action.type) {
		case ADD_ITEM:
			return Object.assign({}, state, { shoppingCart: [...state.shoppingCart, {id: action.id, ...action.payload}]});
		case REMOVE_ITEM:
		console.log(state);
			return Object.assign({}, state, { shoppingCart: state.shoppingCart.filter(item => item.id !== action.id)});
		case CHECK_OUT:
			return Object.assign({}, state, { shoppingCart: []});
		default: 
			return state;
	}
};

export default rootReducer;