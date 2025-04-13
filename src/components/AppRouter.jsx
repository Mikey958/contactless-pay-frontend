import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../utils/routes.js';
import { MAIN_ROUTE } from '../utils/consts.js';
import { Context } from '../main.jsx';

const AppRouter = () => {
	const { user } = useContext(Context);

	console.log(user);
	return (
		<Routes>
			{user.isAuth &&
				authRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} exact />
				))}
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} exact />
			))}

			<Route path='*' element={<Navigate to={MAIN_ROUTE} />} />
		</Routes>
	);
};

export default AppRouter;
