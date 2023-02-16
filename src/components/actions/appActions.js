export const ADD_RATE = "ADD_RATE";
export const EDIT_RATE = "EDIT_RATE";

export const addRate = ({ author, comment, id, rate }) => ({
	type: ADD_RATE,
	payload: {
		author,
		comment,
		id: Math.floor(Math.random() * 1234),
		rate,
	},
});

export const editRate = ({ author, comment, id, rate }) => ({
	type: EDIT_RATE,
	payload: {
		author,
		comment,
		id,
		rate,
	},
});
