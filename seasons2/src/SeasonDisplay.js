import React from "react";

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
        <div>
            <i className={`icon ${icon}`}/>
            <h1>{message}</h1>
            <i className={`icon ${icon}`}/>
        </div>
    );
};

export default SeasonDisplay;
