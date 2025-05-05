import React, { useContext, useState } from 'react';
import arrowIcon from '../../assets/icons/arrow-icon.svg';
import arrowLightIcon from '../../assets/icons/arrow-light-button.svg';
import { observer } from 'mobx-react-lite';
import { Context } from '../../main.jsx';
import s from './AllNearStops.module.scss';
import { Link } from 'react-router-dom';
import filterGrayIcon from '../../assets/icons/filter-gray-icon.svg';
import filterLightIcon from '../../assets/icons/filter-light-icon.svg';
import filterBlueIcon from '../../assets/icons/filter-blue-icon.svg';
import NearStop from '../../components/NearStop/NearStop.jsx';
import { useThemeContext } from '../../contexts/ThemeContext.js';

const filters = [
	{ type: 'all', label: 'Все' },
	{ type: 'bus', label: 'Автобус/Троллейбус' },
	{ type: 'tram', label: 'Трамвай' },
];

const AllNearStops = observer(() => {
	const { theme } = useThemeContext();
	const { map } = useContext(Context);

	const [active, setActive] = useState(false);
	const [activeFilter, setActiveFilter] = useState('all');

	const filteredStops = map.nearStops.filter(
		(stop) => activeFilter === 'all' || stop.type === activeFilter
	);

	return (
		<main className={s['near-stops']}>
			<Link to={-1} className={s['near-stops__link']}>
				<img
					src={theme === 'light' ? arrowIcon : arrowLightIcon}
					alt='Стрелка влево'
				/>
			</Link>
			<section className={s['near-stops__content']}>
				<div className={s['near-stops__title-container']}>
					<h1 className={s['near-stops__title']}>Ближайшие остановки</h1>
					<button
						className={`${s['near-stops__button']} ${active ? s['near-stops__button_active'] : ''}`}
						onClick={() => setActive(!active)}
					>
						<img
							src={
								active
									? filterBlueIcon
									: theme === 'light'
										? filterGrayIcon
										: filterLightIcon
							}
							alt='фильтер'
						/>
					</button>
				</div>
				{active && (
					<div className={s['near-stops__filter']}>
						<p className={s['near-stops__type']}>Тип транспорта</p>
						<div className={s['near-stops__buttons']}>
							{filters.map(({ type, label }) => (
								<button
									key={type}
									className={`${s['near-stops__filter-button']} ${activeFilter === type ? s['near-stops__filter-button_active'] : ''}`}
									onClick={() => setActiveFilter(type)}
								>
									{label}
								</button>
							))}
						</div>
					</div>
				)}

				<div className={s['near-stops__list']}>
					{filteredStops.map((stop) => (
						<NearStop key={stop.id} stop={stop} />
					))}
				</div>
			</section>
		</main>
	);
});

export default AllNearStops;
