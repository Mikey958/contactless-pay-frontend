import tramIcon from '../assets/icons/tram-green-icon.svg';
import busIcon from '../assets/icons/bus-icon.svg';

const GetStopStyle = (type) => {
	switch (type) {
		case 'tram':
			return {
				src: tramIcon,
				color: '#71B65E',
				background: '#94DA81',
				gradient:
					'linear-gradient(90deg, #71B65E 49.98%, rgba(113, 182, 94, 0.6) 100%)',
			};
		case 'bus':
			return {
				src: busIcon,
				color: '#3498DB',
				background: '#5BB4F0',
				gradient:
					'linear-gradient(90deg, #3498DB 49.98%, rgba(52, 152, 219, 0.6) 100%)',
			};
		case 'trolleybus':
			return {
				src: busIcon,
				color: '#3498DB',
				background: '#5BB4F0',
				gradient:
					'linear-gradient(90deg, #3498DB 49.98%, rgba(52, 152, 219, 0.6) 100%)',
			};
		default:
			return {
				src: busIcon,
				color: '#3498DB',
				background: '#5BB4F0',
				gradient:
					'linear-gradient(90deg, #3498DB 49.98%, rgba(52, 152, 219, 0.6) 100%)',
			};
	}
};

export default GetStopStyle;
