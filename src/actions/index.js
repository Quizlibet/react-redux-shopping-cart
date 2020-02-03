export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CHECK_OUT = "CHECK_OUT";

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

export const checkOut = () => ({
	type: CHECK_OUT,
});