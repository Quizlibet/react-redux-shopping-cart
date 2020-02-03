import { ADD_ITEM, REMOVE_ITEM, CHECK_OUT } from '../actions';

const initialState = {
	shoppingCart: [],
	groceries: [
		{
			//id: 1,
			itemName: "potatoes",
			price: 1.3,
		},
		{
			//id: 2,
			itemName: "carrots",
			price: 1.3,
		},
		{
			//id: 3,
			itemName: "onions",
			price: 1.3,
		},
		{
			//id: 4,
			itemName: "pears",
			price: 1.3,
		},
		{
			//id: 5,
			itemName: "eggs",
			price: 1.3,
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