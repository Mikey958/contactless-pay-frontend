import React from 'react';
import s from './MapPage.module.scss';
import { Placemark, YMaps, Map as YMap } from '@pbe/react-yandex-maps';

const mockStops = [
	{
		id: 1,
		name: 'Остановка: Уралмаш',
		lat: 56.8911,
		lon: 60.6107,
	},
	{
		id: 2,
		name: 'Остановка: Площадь 1905 года',
		lat: 56.8372,
		lon: 60.5975,
	},
	{
		id: 3,
		name: 'Остановка: Ботаническая',
		lat: 56.8004,
		lon: 60.6221,
	},
];

const mockTransportData = {
	1: [
		{ type: 'bus', route: 27, time: '3 мин' },
		{ type: 'tram', route: 10, time: '7 мин' },
	],
	2: [{ type: 'trolleybus', route: 5, time: '1 мин' }],
	3: [
		{ type: 'bus', route: 61, time: '2 мин' },
		{ type: 'tram', route: 15, time: '5 мин' },
	],
};

const MapPage = () => {
	const handleClick = (stop) => {
		const data = mockTransportData[stop.id] || [];
		if (data.length === 0) {
			alert(`На остановке "${stop.name}" сейчас нет информации о транспорте`);
			return;
		}
		const list = data
			.map((item) => `${item.type} №${item.route} — через ${item.time}`)
			.join('\n');
		alert(`Транспорт на остановке "${stop.name}":\n\n${list}`);
	};

	return (
		<div className={s['map-page']}>
			<YMaps query={{ apikey: import.meta.env.VITE_YANDEX_API_KEY }}>
				<YMap
					defaultState={{ center: [56.8389, 60.6057], zoom: 12 }}
					width='320px'
					height='500px'
					options={{
						suppressMapOpenBlock: true, // ❌ отключает рекламу такси (и «как добраться»)
						yandexMapDisablePoiInteractivity: true, // ❌ отключает кликабельность по POI (точки интереса — универы, магазины и т.д.)
					}}
					modules={['control.ZoomControl']}
				>
					{mockStops.map((stop) => (
						<Placemark
							key={stop.id}
							geometry={[stop.lat, stop.lon]}
							properties={{
								hintContent: stop.name,
								balloonContent: 'Нажмите, чтобы посмотреть транспорт',
							}}
							onClick={() => handleClick(stop)}
						/>
					))}
				</YMap>
			</YMaps>
		</div>
	);
};

export default MapPage;
