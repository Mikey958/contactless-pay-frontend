import React, { useState } from 'react';
import arrowLightIcon from '../../assets/icons/arrow-light-button.svg';
import arrowDarkIcon from '../../assets/icons/arrow-icon.svg';
import s from './SearchPage.module.scss';
import { Link, useSearchParams } from 'react-router-dom';
import { useThemeContext } from '../../contexts/ThemeContext.js';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import { clsx } from 'clsx';
import filterGrayIcon from '../../assets/icons/filter-gray-icon.svg';
import filterLightIcon from '../../assets/icons/filter-light-icon.svg';
import filterBlueIcon from '../../assets/icons/filter-blue-icon.svg';
import RouteSelect from '../../components/RouteSelect/RouteSelect.jsx';

const filters = [
	{ transport_type: 'all', label: 'Все' },
	{ transport_type: 'bus', label: 'Автобус' },
	{ transport_type: 'trol', label: 'Троллейбус' },
	{ transport_type: 'tram', label: 'Трамвай' },
];

const options = [
	{
		route_id: 1,
		route_number: '12',
		route_title: 'СТЦ - ЖБИ Мега',
	},
	{
		route_id: 2,
		route_number: '24',
		route_title: 'СТЦ - ЖБИ Мега',
	},
	{
		route_id: 3,
		route_number: '86',
		route_title: 'СТЦ - ЖБИ Мега',
	},
	{
		route_id: 4,
		route_number: '52',
		route_title: 'СТЦ - ЖБИ Мега',
	},
];

const SearchPage = () => {
	const { theme } = useThemeContext();

	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get('query');

	const handleSearch = (query) => {
		console.log('Поиск:', query);
	};

	const [activeFilterMenu, setActiveFilterMenu] = useState(false);

	const [activeFilter, setActiveFilter] = useState('all');
	const [selected, setSelected] = useState(null);

	return (
		<main className={s['search-page']}>
			<Link to={-1} className={s['search-page__back-button']}>
				<img
					src={theme === 'light' ? arrowDarkIcon : arrowLightIcon}
					alt='Стрелка влево'
				/>
			</Link>

			<section className={s['search-page__content']}>
				<h1 className={s['search-page__title']}>Результаты поиска</h1>

				<div className={s['search-page__search-container']}>
					<SearchBar
						placeholder='Поиск по номеру маршрута или Т/С...'
						onSearch={handleSearch}
						initialValue={query}
					/>
					<button
						className={clsx(
							s['search-page__filter-button'],
							activeFilterMenu && s['search-page__filter-button_active']
						)}
						onClick={() => setActiveFilterMenu(!activeFilterMenu)}
					>
						<img
							src={
								activeFilterMenu
									? filterBlueIcon
									: theme === 'light'
										? filterGrayIcon
										: filterLightIcon
							}
							alt='фильтер'
						/>
					</button>
				</div>

				{activeFilterMenu && (
					<div className={s['search-page__filter-menu']}>
						<div className={s['search-page__top-container']}>
							<h3 className={s['search-page__menu-text']}>Тип транспорта</h3>
							<div className={s['search-page__menu-buttons']}>
								{filters.map(({ transport_type, label }) => (
									<button
										key={transport_type}
										className={clsx(
											s['search-page__menu-button'],
											transport_type === activeFilter &&
												s['search-page__menu-button_active']
										)}
										onClick={() => setActiveFilter(transport_type)}
									>
										{label}
									</button>
								))}
							</div>
						</div>
						<div className={s['search-page__bottom-container']}>
							<p className={s['search-page__menu-text']}>Фильтровать по</p>
							<RouteSelect
								value={selected}
								onSelect={setSelected}
								placeholder='Номер маршрута'
								options={options}
							/>
						</div>
					</div>
				)}
			</section>
		</main>
	);
};

export default SearchPage;
