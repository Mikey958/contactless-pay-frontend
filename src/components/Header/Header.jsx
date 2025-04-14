import React from 'react';
import s from './Header.module.scss';
import geoIcon from '../../assets/icons/change-geo-icon.svg';
import themeIcon from '../../assets/icons/change-theme-icon.svg';
import SearchBar from '../SearchBar/SearchBar.jsx';

const Header = () => {
	const handleSearch = (query) => {
		console.log('Поиск:', query);
	};

	return (
		<header className={s.header}>
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
				<button className={s.header__button}>
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
