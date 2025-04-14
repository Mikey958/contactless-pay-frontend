import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../utils/routes.js';
import { MAIN_ROUTE } from '../utils/consts.js';
import { Context } from '../main.jsx';

const AppRouter = () => {
	const { user } = useContext(Context);

	return (
		<Routes>
			{user.isAuth &&
				authRoutes.map(({ path, Component, Layout }) => (
					<Route
						key={path}
						path={path}
						element={
							<Layout>
								<Component />
							</Layout>
						}
						exact
					/>
				))}
			{publicRoutes.map(({ path, Component, Layout }) => (
				<Route
					key={path}
					path={path}
					element={
						<Layout>
							<Component />
						</Layout>
					}
					exact
				/>
			))}

			<Route path='*' element={<Navigate to={MAIN_ROUTE} />} />
		</Routes>
	);
};

export default AppRouter;
