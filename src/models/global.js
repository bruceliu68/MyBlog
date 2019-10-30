export default {
	state: {
		headerActive: null
	},
	effects: {

	},
	reducers: {
		changeState(state, action) {
			return {
				...state,
				...action
			};
		}
	}
};
