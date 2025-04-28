import React from 'react';
import s from './Layout.module.scss';
import Footer from '../components/Footer/Footer.jsx';

const OnlyFooterLayout = ({ children }) => {
	return (
		<div className={s.layout}>
			{children}
			<Footer />
		</div>
	);
};

export default OnlyFooterLayout;
