import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPostsAndUsersAction = () => async (dispatch, getState) => {
	await dispatch(fetchPostsAction());

	// WAY DONE BEFORE TUTORIAL
	// const userIdList = [];
	// getState().posts.map(post => {
	// 	if (userIdList.includes(post.userId)) {
	// 		return null;
	// 	}
	// 	userIdList.push(post.userId);
	// });
	// for (let userId of userIdList) {
	// 	await dispatch(fetchUserAction(userId)); // await is not needed since there is no more logic needed to execute in this function
	// }

	// WAY DONE USING LODASH
	// const userIds = _.uniq(_.map(getState().posts, "userId"));
	// userIds.forEach(id => dispatch(fetchUserAction(id)));

	// SHORTER WAY OF USING LODASH
	_.chain(getState().posts)
		.map("userId")
		.uniq()
		.forEach(id => dispatch(fetchUserAction(id)))
		.value();
};

// BEFORE REFACTOR
// export const fetchPosts = () => {
//  return async function(dispatch, getState) {
//    const response = await jsonPlaceholder.get("/posts");

//    dispatch({ type: "FETCH_POSTS", payload: response });
//  };
// };

// PROMISE BASED ASYNC CALL
// export const fetchPosts = () => {
//   return function(dispatch, getState) {
//     jsonPlaceholder.get('/posts').then(res => dispatch({type: "FETCH_POSTS", payload: res})).catch(err => console.log(err))
//   }
// }

export const fetchPostsAction = () => async dispatch => {
	const response = await jsonPlaceholder.get("/posts");

	dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUserAction = id => async dispatch => {
	const request = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({ type: "FETCH_USER", payload: request.data });
};

// export const fetchUserAction = id => dispatch => _fetchUser(id, dispatch);
// // _functions are private functions, shouldnt be touched unless dev knows what they are doing
// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsonPlaceholder.get(`/users/${id}`);

// 	dispatch({ type: "FETCH_USER", payload: response.data });
// });

// // memoizing essentially stores the result of invoking the memoized function in memory.
// // If the function is invoked a second time with the same arguments, it will return the
// // previous result instead of calling the function over again
