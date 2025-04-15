import React from 'react';
import tramIcon from '../assets/icons/tram-icon.svg';
import trolleybusIcon from '../assets/icons/trolleybus-icon.svg';
import busIcon from '../assets/icons/bus-icon.svg';

const GetImageSrc = (text) => {
	switch (text) {
		case 'tram':
			return tramIcon;
		case 'trolleybus':
			return trolleybusIcon;
		case 'bus':
			return busIcon;
		default:
			return busIcon;
	}
};

export default GetImageSrc;
