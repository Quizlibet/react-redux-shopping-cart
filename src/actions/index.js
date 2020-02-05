export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REFRESH_CART = "REFRESH_CART";
export const REQUEST_CHECKOUT = "REQUEST_CHECKOUT";
export const COMPLETE_CHECKOUT = "COMPLETE_CHECKOUT";

let nextItemID = 0;

export const addItem = (payload) => ({
	type: ADD_ITEM,
	id: nextItemID++,
	payload
});

export const removeItem = id => ({
	type: REMOVE_ITEM,
	id
});

export const refreshCart = () => ({
	type: REFRESH_CART,
});

export const requestCheckout = () => ({
	type: REQUEST_CHECKOUT,
});

export const completeCheckout = () => ({
	type: COMPLETE_CHECKOUT,
});

export function fetchCheckout() {
	return dispatch => {
		dispatch(requestCheckout());
		return fetch("https://reqres.in/api/unknown/2")
		.then(() => dispatch(completeCheckout()));
	}
}