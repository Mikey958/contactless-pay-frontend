import React from 'react';
import s from './Layout.module.scss';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

const FullLayout = ({ children }) => {
	return (
		<div className={s.layout}>
			<Header />
			<main className={s.layout__content}>{children}</main>
			<Footer />
		</div>
	);
};

export default FullLayout;
