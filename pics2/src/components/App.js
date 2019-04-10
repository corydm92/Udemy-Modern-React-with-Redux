import React from "react";
import SearchBar from "./SearchBar";

import SecretKey from "../config";

class App extends React.Component {
	handleSearchSubmit(search) {
		console.log(search);
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
