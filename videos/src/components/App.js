import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.handleTermSubmit("buildings");
	}

	handleTermSubmit = term => {
		youtube
			.get("/search", { params: { q: term } })
			.then(res => this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] }))
			.catch(err => console.log(err));
	};

	handleVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		console.log(this.state);
		return (
			<div className='ui container'>
				<SearchBar handleTermSubmit={this.handleTermSubmit} />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className='five wide column'>
							<VideoList videos={this.state.videos} handleVideoSelect={this.handleVideoSelect} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
