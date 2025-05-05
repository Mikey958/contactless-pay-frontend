import React from 'react';
import s from './AddToFavorite.module.scss';
import { Link } from 'react-router-dom';
import arrowIcon from '../../assets/icons/arrow-icon.svg';
import arrowLightIcon from '../../assets/icons/arrow-light-button.svg';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import MainTransportList from '../../components/MainTransportList/MainTransportList.jsx';
import { useThemeContext } from '../../contexts/ThemeContext.js';

const AddToFavorite = () => {
	const { theme } = useThemeContext();
	const handleSearch = (query) => {
		console.log('Поиск:', query);
	};

	return (
		<main className={s['favorite-add']}>
			<Link to={-1} className={s['favorite-add__button']}>
				<img
					className={s['favorite-add__arrow']}
					src={theme === 'dark' ? arrowLightIcon : arrowIcon}
					alt='Стрелка влево'
				/>
			</Link>
			<section className={s['favorite-add__search']}>
				<h1 className={s['favorite-add__title']}>Добавьте маршрут</h1>
				<p
					className={s['favorite-add__text']}
				>{`Выберите нужный маршрут, чтобы добавить его в
				избранное`}</p>
				<SearchBar
					placeholder='Поиск по номеру маршрута или Т/С...'
					onSearch={handleSearch}
				/>
			</section>
			<section className={s['favorite-add__popular-container']}>
				<h2 className={s['favorite-add__subtitle']}>Популярные маршруты</h2>
				<MainTransportList path='favorite-add' />
			</section>
		</main>
	);
};

export default AddToFavorite;
