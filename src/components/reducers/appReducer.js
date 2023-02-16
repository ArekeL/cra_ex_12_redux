import { ADD_RATE, EDIT_RATE, DELETE_RATE } from "../actions/appActions";

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
		case DELETE_RATE:
			return state.filter(
				(currentStateElement) => currentStateElement.id !== action.payload.id
			);

		default:
			console.warn(`No action ${action.type}`);
			return state;
	}
};
