import React, { useEffect, useState } from 'react';
import s from './Header.module.scss';
import geoIcon from '../../assets/icons/change-geo-icon.svg';
import themeIcon from '../../assets/icons/change-theme-icon.svg';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { useNavigate } from 'react-router-dom';
import { CHANGE_GEOLOCATION_ROUTE } from '../../utils/consts.js';

const Header = () => {
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
				<button className={s.header__button}>
					<img
						className={s.header__buttonIcon}
						src={geoIcon ? geoIcon : undefined}
						alt='Геопозиция'
					/>
				</button>
				<button
					onClick={() => navigate(CHANGE_GEOLOCATION_ROUTE)}
					className={s.header__button}
				>
					<img
						className={s.header__buttonIcon}
						src={themeIcon ? themeIcon : undefined}
						alt='Геопозиция'
					/>
				</button>
			</div>
		</header>
	);
};

export default Header;
