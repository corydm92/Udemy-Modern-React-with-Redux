export default (state = [], action) => {
	switch (action.type) {
		case "FETCH_POSTS":
			//console.log([...state, ...action.payload]); // Could do this if we needed to keep from mutating state (refreshing stale post data)
			return action.payload;
		default:
			return state;
	}
};
