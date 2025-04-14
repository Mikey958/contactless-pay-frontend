import React from 'react';
import s from './Layout.module.scss';

const EmptyLayout = ({ children }) => {
	return (
		<div className={s.layout}>
			<main className={s.layout__content}>{children}</main>
		</div>
	);
};

export default EmptyLayout;
