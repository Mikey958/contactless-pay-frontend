import React from 'react';
import s from './Layout.module.scss';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

const FullLayout = ({ children }) => {
	return (
		<div className={s.layout}>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default FullLayout;
