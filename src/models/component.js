export default {
	state: {
		sideMenuActive: null
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
