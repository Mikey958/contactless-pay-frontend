import {
	CHANGE_GEOLOCATION_ROUTE,
	HISTORY_ROUTE,
	MAIN_ROUTE,
} from './consts.js';
import Home from '../pages/Home.jsx';
import SetLocation from '../pages/SetLocation.jsx';
import History from '../pages/History.jsx';

export const authRoutes = [
	{
		path: HISTORY_ROUTE,
		Component: History,
	},
];

export const publicRoutes = [
	{
		path: MAIN_ROUTE,
		Component: Home,
	},
	{
		path: CHANGE_GEOLOCATION_ROUTE,
		Component: SetLocation,
	},
];
