import React from 'react';
import s from './Layout.module.scss';

const EmptyLayout = ({ children }) => {
	return <div className={s.layout}>{children}</div>;
};

export default EmptyLayout;
