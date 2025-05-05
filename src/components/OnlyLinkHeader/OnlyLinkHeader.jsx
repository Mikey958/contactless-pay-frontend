import React from 'react';
import s from './OnlyLinkHeader.module.scss';
import arrowIcon from '../../assets/icons/arrow-icon.svg';
import arrowWhiteIcon from '../../assets/icons/arrow-light-button.svg';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../contexts/ThemeContext.js';

const OnlyLinkHeader = () => {
	const { theme } = useThemeContext();
	return (
		<header className={s['only-link-header']}>
			<Link to={-1} className={s['only-link-header__back']}>
				<img
					className={s['only-link-header__arrow']}
					src={theme === 'dark' ? arrowWhiteIcon : arrowIcon}
					alt='Стрелка'
				/>
			</Link>
		</header>
	);
};

export default OnlyLinkHeader;
