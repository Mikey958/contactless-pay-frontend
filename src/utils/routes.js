import {
	ALL_NEARS_STOPS,
	CHANGE_GEOLOCATION_ROUTE,
	FAVORITE_ADD_ROUTE,
	FAVORITE_EDIT_ROUTE,
	FAVORITE_ROUTE,
	FAVORITE_TRANSPORT_ROUTE,
	HISTORY_ROUTE,
	MAIN_ROUTE,
	MAP_ROUTE,
	SEARCH_ROUTE,
	STOP_ROUTE,
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
import EmptyHeaderLayout from '../layout/EmptyHeaderLayout.jsx';
import { Component } from 'react';
import AllNearStops from '../pages/AllNearStops/AllNearStops.jsx';
import OnlyFooterLayout from '../layout/OnlyFooterLayout.jsx';
import Stop from '../pages/Stop/Stop.jsx';
import SearchPage from '../pages/SearchPage/SearchPage.jsx';

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
		Layout: EmptyHeaderLayout,
	},
	{
		path: FAVORITE_TRANSPORT_ROUTE + '/:route',
		Component: FavoriteTransport,
		Layout: EmptyHeaderLayout,
	},
	{
		path: ALL_NEARS_STOPS,
		Component: AllNearStops,
		Layout: EmptyLayout,
	},
];

export const publicRoutes = [
	{
		path: MAIN_ROUTE,
		Component: Home,
		Layout: FullLayout,
	},
	{
		path: SEARCH_ROUTE,
		Component: SearchPage,
		Layout: EmptyLayout,
	},
	{
		path: TRANSPORT_ROUTE + '/:uuid',
		Component: Transport,
		Layout: FullLayout,
	},
	{
		path: STOP_ROUTE + '/:id',
		Component: Stop,
		Layout: EmptyHeaderLayout,
	},
	{
		path: MAP_ROUTE,
		Component: MapPage,
		Layout: OnlyFooterLayout,
	},
	{
		path: CHANGE_GEOLOCATION_ROUTE,
		Component: SetLocation,
		Layout: EmptyLayout,
	},
];
