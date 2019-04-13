import axios from "axios";
import config from "../config.json"; // config.key for api key

export default axios.create({
	// create makes instance of axios with default properties
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: `Client-ID ${config.key}`
	}
});
