export const ADD_RATE = "ADD_RATE";
export const DELETE_RATE = "DELETE_RATE";
export const EDIT_RATE = "EDIT_RATE";

const addRate = ({ author, comment, id, rate }) => ({
	type: ADD_RATE,
	payload: {
		author,
		comment,
		id: Math.floor(Math.random * 1234),
		rate,
	},
});

const deleteRate = (id) => ({
	type: DELETE_RATE,
	payload: {
		id,
	},
});

const editRate = ({ author, comment, id, rate }) => ({
	type: EDIT_RATE,
	payload: {
		author,
		comment,
		id,
		rate,
	},
});
