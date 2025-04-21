import React from 'react';
import s from './OnlyLinkHeader.module.scss';
import arrowIcon from '../../assets/icons/arrow-icon.svg';
import { Link } from 'react-router-dom';

const OnlyLinkHeader = () => {
	return (
		<header className={s['only-link-header']}>
			<Link to={-1} className={s['only-link-header__back']}>
				<img
					className={s['only-link-header__arrow']}
					src={arrowIcon}
					alt='Стрелка'
				/>
			</Link>
		</header>
	);
};

export default OnlyLinkHeader;
