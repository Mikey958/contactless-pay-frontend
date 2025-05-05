import React, { useEffect, useState } from 'react';
import s from './Header.module.scss';
import geoLightIcon from '../../assets/icons/change-geo-icon.svg';
import geoDarkIcon from '../../assets/icons/change-geo-dark-icon.svg';
import themeDarkIcon from '../../assets/icons/change-theme-icon.svg';
import themeLightIcon from '../../assets/icons/theme_light-icon.svg';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { useNavigate } from 'react-router-dom';
import { CHANGE_GEOLOCATION_ROUTE } from '../../utils/consts.js';
import { useThemeContext } from '../../contexts/ThemeContext.js';

const Header = () => {
	const { theme, setTheme } = useThemeContext();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	const navigate = useNavigate();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const handleSearch = (query) => {
		console.log('Поиск:', query);
	};

	return (
		<header className={`${s.header} ${scrolled ? s.header_scrolled : ''}`}>
			<SearchBar
				placeholder='Поиск по номеру маршрута...'
				onSearch={handleSearch}
			/>
			<div className={s.header__container}>
				<button
					className={s.header__button}
					onClick={() => navigate(CHANGE_GEOLOCATION_ROUTE)}
					style={
						theme === 'light'
							? { border: '1px solid #F8F9FA' }
							: { border: '1px solid #404040' }
					}
				>
					<img
						className={s.header__buttonIcon}
						src={theme === 'light' ? geoLightIcon : geoDarkIcon}
						alt='Геопозиция'
					/>
				</button>
				<button
					className={s.header__button}
					style={
						theme === 'light'
							? { border: '1px solid transparent' }
							: { border: '1px solid #404040' }
					}
					onClick={toggleTheme}
				>
					<img
						className={s.header__buttonIcon}
						src={theme === 'dark' ? themeLightIcon : themeDarkIcon}
						alt='Смена темы'
					/>
				</button>
			</div>
		</header>
	);
};

export default Header;
