import React from "react";
import SearchBar from "./SearchBar";

import config from "../config.json";

class App extends React.Component {
	handleSearchSubmit(search) {
		console.log(search);
	}

	componentDidMount() {
		console.log(config.key);
	}

	render() {
		return (
			<div className='ui container' style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.handleSearchSubmit} />
			</div>
		);
	}
}

export default App;
