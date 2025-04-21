import {
	CHANGE_GEOLOCATION_ROUTE,
	FAVORITE_ADD_ROUTE,
	FAVORITE_EDIT_ROUTE,
	FAVORITE_ROUTE,
	FAVORITE_TRANSPORT_ROUTE,
	HISTORY_ROUTE,
	MAIN_ROUTE,
	MAP_ROUTE,
	TRANSPORT_ROUTE,
} from './consts.js';
import Home from '../pages/Home/Home.jsx';
import SetLocation from '../pages/SetLocation/SetLocation.jsx';
import History from '../pages/History/History.jsx';
import EmptyLayout from '../layout/EmptyLayout.jsx';
import FullLayout from '../layout/FullLayout.jsx';
import Favorite from '../pages/Favorite/Favorite.jsx';
import MapPage from '../pages/Map/MapPage.jsx';
import AddToFavorite from '../pages/AddToFavorite/AddToFavorite.jsx';
import Transport from '../pages/Transport/Transport.jsx';
import FavoriteEdit from '../pages/FavoriteEdit/FavoriteEdit.jsx';
import FavoriteTransport from '../pages/FavoriteTransport/FavoriteTransport.jsx';
import FavoriteEditLayout from '../layout/FavoriteEditLayout.jsx';

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
	{
		path: FAVORITE_ADD_ROUTE,
		Component: AddToFavorite,
		Layout: EmptyLayout,
	},
	{
		path: FAVORITE_EDIT_ROUTE + '/:route',
		Component: FavoriteEdit,
		Layout: FavoriteEditLayout,
	},
	{
		path: FAVORITE_TRANSPORT_ROUTE + '/:route',
		Component: FavoriteTransport,
		Layout: FavoriteEditLayout,
	},
];

export const publicRoutes = [
	{
		path: MAIN_ROUTE,
		Component: Home,
		Layout: FullLayout,
	},
	{
		path: TRANSPORT_ROUTE + '/:number',
		Component: Transport,
		Layout: FullLayout,
	},
	{
		path: MAP_ROUTE,
		Component: MapPage,
		Layout: FullLayout,
	},
	{
		path: CHANGE_GEOLOCATION_ROUTE,
		Component: SetLocation,
		Layout: EmptyLayout,
	},
];
