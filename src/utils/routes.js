import {
	CHANGE_GEOLOCATION_ROUTE,
	FAVORITE_ROUTE,
	HISTORY_ROUTE,
	MAIN_ROUTE,
	MAP_ROUTE,
} from './consts.js';
import Home from '../pages/Home/Home.jsx';
import SetLocation from '../pages/SetLocation/SetLocation.jsx';
import History from '../pages/History/History.jsx';
import EmptyLayout from '../layout/EmptyLayout.jsx';
import FullLayout from '../layout/FullLayout.jsx';
import Favorite from '../pages/Favorite/Favorite.jsx';
import Map from '../pages/Map/Map.jsx';

export const authRoutes = [
	{
		path: HISTORY_ROUTE,
		Component: History,
		Layout: FullLayout,
	},
	{
		path: FAVORITE_ROUTE,
		Component: Favorite,
		Layout: FullLayout,
	},
];

export const publicRoutes = [
	{
		path: MAIN_ROUTE,
		Component: Home,
		Layout: FullLayout,
	},
	{
		path: MAP_ROUTE,
		Component: Map,
		Layout: FullLayout,
	},
	{
		path: CHANGE_GEOLOCATION_ROUTE,
		Component: SetLocation,
		Layout: EmptyLayout,
	},
];
