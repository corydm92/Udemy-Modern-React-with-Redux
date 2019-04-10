import React from "react";

import "./SeasonDisplay.css"

const seasonConfig = {
    summer: {
        message: 'Its Hot!',
        icon: 'sun'
    },
    winter: {
        message: 'Its Cold!',
        icon: 'snowflake'
    }
}

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

const SeasonDisplay = props => {
	const season = getSeason(props.lat, new Date().getMonth());
    
    const {message, icon} = seasonConfig[season]


    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left icon massive ${icon}`}/>
            <h1>{message}</h1>
            <i className={`icon-right icon massive ${icon}`}/>
        </div>
    );
};

export default SeasonDisplay;
