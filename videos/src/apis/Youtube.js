import axios from "axios";

const KEY = "AIzaSyCn5zSKJXMFtOmniznhJtHPCSX4Mt95mmw";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});

// axios
// 	.get("https://www.googleapis.com/youtube/v3/search/", {
// 		params: {
// 			part: "snippet",
// 			maxResults: 5,
// 			key: "AIzaSyCn5zSKJXMFtOmniznhJtHPCSX4Mt95mmw",
// 			q: term
// 		}
// 	})
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err));
