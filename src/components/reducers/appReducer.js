import { ADD_RATE, EDIT_RATE } from "../actions/appActions";

export const appReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_RATE:
			return [...state, action.payload];
		case EDIT_RATE:
			return state.map((currentStateElement) => {
				if (currentStateElement.id !== action.payload.id) {
					return currentStateElement;
				}

				return {
					author: action.payload.author,
					comment: action.payload.comment,
					id: currentStateElement.id,
					rate: action.payload.rate,
				};
			});

		default:
			console.warn(`No action ${action.type}`);
			return state;
	}
};
