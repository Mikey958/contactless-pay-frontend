import tramIcon from '../assets/icons/tram-icon.svg';
import trolleybusIcon from '../assets/icons/trolleybus-icon.svg';
import busIcon from '../assets/icons/bus-icon.svg';
import busWhiteIcon from '../assets/icons/bus-white-icon.svg';
import trolleybusWhiteIcon from '../assets/icons/trolleybus-white-icon.svg';
import tramWhiteIcon from '../assets/icons/tram-white-icon.svg';

const GetImageSrc = (text, color = 'blue') => {
	switch (text) {
		case 'tram':
			if (color === 'white') return tramWhiteIcon;
			return tramIcon;
		case 'trolleybus':
			if (color === 'white') return trolleybusWhiteIcon;
			return trolleybusIcon;
		case 'bus':
			if (color === 'white') return busWhiteIcon;
			return busIcon;
		default:
			return busIcon;
	}
};

export default GetImageSrc;
