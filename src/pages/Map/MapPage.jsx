import React, { useContext, useState, useEffect } from 'react';
import s from './MapPage.module.scss';
import {
	Placemark,
	YMaps,
	Map as YMap,
	FullscreenControl,
} from '@pbe/react-yandex-maps';
import { observer } from 'mobx-react-lite';
import { Context } from '../../main.jsx';
import placeMarkBlueIcon from '../../assets/icons/placemark_blue_icon.svg';
import placeMarkGreenIcon from '../../assets/icons/placemark_green_icon.svg';
import IntroBlock from '../../components/IntroBlock/IntroBlock.jsx';
import { Link, useNavigate } from 'react-router-dom';
import arrowIcon from '../../assets/icons/arrow-blue-icon.svg';
import SliceStopsList from '../../components/StopsList/SliceStopsList.jsx';
import { ALL_NEARS_STOPS, STOP_ROUTE } from '../../utils/consts.js';
import { useThemeContext } from '../../contexts/ThemeContext.js';

const MapPage = observer(() => {
	const { theme } = useThemeContext();
	const { map } = useContext(Context);
	const navigate = useNavigate();

	const [bounds, setBounds] = useState(null);
	const [zoom, setZoom] = useState(12);

	const getIconOptions = (type) => ({
		iconLayout: 'default#image',
		iconImageHref: type === 'tram' ? placeMarkGreenIcon : placeMarkBlueIcon,
		iconImageSize: [30, 30],
		iconImageOffset: [-15, -15],
	});

	const handleBoundsChange = (e) => {
		const newBounds = e.get('newBounds');
		const newZoom = e.get('newZoom');
		setBounds(newBounds);
		setZoom(newZoom);
	};

	const isStopVisible = (stop) => {
		if (!bounds) return false;
		const [[southWestLat, southWestLon], [northEastLat, northEastLon]] = bounds;
		return (
			stop.lat > southWestLat &&
			stop.lat < northEastLat &&
			stop.lon > southWestLon &&
			stop.lon < northEastLon
		);
	};

	useEffect(() => {
		const observer = new MutationObserver(() => {
			const fsMap = document.querySelector('.ymaps-2-1-79-map');
			if (fsMap) {
				fsMap.style.filter = 'var(--map)';
			}
		});
		observer.observe(document.body, { childList: true, subtree: true });

		return () => observer.disconnect();
	}, [theme]);

	return (
		<main className={s['map-page']}>
			<IntroBlock
				title='Карта транспорта'
				description={`Найдите ближайшие остановки и маршруты`}
				marginBottom='15px'
			/>
			<section className={s['map-page__container']}>
				<YMaps query={{ apikey: import.meta.env.VITE_YANDEX_API_KEY }}>
					<YMap
						defaultState={{ center: [56.8389, 60.6057], zoom: 12 }}
						className={s['map-page__map']}
						options={{
							suppressMapOpenBlock: true,
							yandexMapDisablePoiInteractivity: true,
						}}
						modules={['control.ZoomControl']}
						onBoundsChange={handleBoundsChange}
					>
						{map.stops
							.filter((stop) => zoom >= 13 && isStopVisible(stop))
							.map((stop) => (
								<Placemark
									key={stop.id}
									geometry={[stop.lat, stop.lon]}
									properties={{
										hintContent: stop.name,
										balloonContent: 'Остановка',
									}}
									options={getIconOptions(stop.type)}
									onClick={() => navigate(STOP_ROUTE + '/' + stop.id)}
								/>
							))}
						<FullscreenControl />
					</YMap>
				</YMaps>

				<div className={s['map-page__legend']}>
					<div className={s['map-page__legend-elem']}>
						<img
							className={s['map-page__placemark']}
							src={placeMarkBlueIcon}
							alt='Голубая точка'
						/>
						<p className={s['map-page__legend-text']}>
							Автобусная/троллейбусная остановка
						</p>
					</div>
					<div className={s['map-page__legend-elem']}>
						<img
							className={s['map-page__placemark']}
							src={placeMarkGreenIcon}
							alt='Зеленая точка'
						/>
						<p className={s['map-page__legend-text']}>Трамвайная остановка</p>
					</div>
				</div>
			</section>

			<section className={s['map-page__near-container']}>
				<div className={s['map-page__near-wrapper']}>
					<h2 className={s['map-page__near-subtitle']}>Ближайшие остановки</h2>
					<Link to={ALL_NEARS_STOPS} className={s['map-page__link']}>
						<img src={arrowIcon} alt='Стрелка в право' />
						<span className={s['map-page__link-text']}>Все</span>
					</Link>
				</div>
				<SliceStopsList />
			</section>
		</main>
	);
});

export default MapPage;
