export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REQUEST_CHECKOUT = "REQUEST_CHECKOUT";
export const COMPLETE_CHECKOUT = "COMPLETE_CHECKOUT";

let nextItemID = 0;

const addItem = (payload) => ({
	type: ADD_ITEM,
	id: nextItemID++,
	payload
});

const removeItem = id => ({
	type: REMOVE_ITEM,
	id
});

const requestCheckout = () => ({
	type: REQUEST_CHECKOUT,
});

const completeCheckout = () => ({
	type: COMPLETE_CHECKOUT,
});

function allowCheckout(state) {
	const {isCartLoading} = state;
	if(isCartLoading) {
		return false;
	} return true;
};

export function asyncRemoveItem(id) {
	return (dispatch, getState) => {
		if(allowCheckout(getState())) {
			dispatch(removeItem(id));
		}
	}
} 

export function asyncAddItem(payload) {
	return (dispatch, getState) => {
		if(allowCheckout(getState())) {
			dispatch(addItem(payload));
		}
	}
};

export function asyncCheckout() {
	return (dispatch, getState) => {
		if(allowCheckout(getState())) {
			dispatch(requestCheckout());
			return fetch("reqres.in/api/unknown/2")
			.then(response => response.data)
			.then(() => alert("Checkout Success!"))
			.then(() => dispatch(completeCheckout()));
		}
	}
};