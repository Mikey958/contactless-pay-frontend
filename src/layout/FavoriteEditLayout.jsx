import React from 'react';
import s from './Layout.module.scss';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import OnlyLinkHeader from '../components/OnlyLinkHeader/OnlyLinkHeader.jsx';

const FavoriteEditLayout = ({ children }) => {
	return (
		<div className={s.layout}>
			<OnlyLinkHeader />
			{children}
			<Footer />
		</div>
	);
};

export default FavoriteEditLayout;
