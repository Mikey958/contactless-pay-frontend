import React, { useContext, useEffect, useRef } from 'react';
import s from './Stop.module.scss';
import { useParams } from 'react-router-dom';
import { Context } from '../../main.jsx';
import { observer } from 'mobx-react-lite';
import getStopStyle from '../../utils/getStopStyle.js';
import getImageSrc from '../../utils/getImageSrc.js';
import NearStopTransportList from '../../components/StopTransportList/NearStopTransportList.jsx';
import TransportInStopItem from '../../components/TransportInStopItem/TransportInStopItem.jsx';

const Stop = observer(() => {
	const { id } = useParams();
	const { map } = useContext(Context);
	const stopRef = useRef();

	const stop = map.stops.find((stop) => String(stop.id) === id);

	const stopStyles = getStopStyle(stop.type);
	const imageSrc = getImageSrc(stop.type, 'white');

	useEffect(() => {
		if (stopRef.current && stop.nearTransports.length > 0) {
			stopRef.current.style.borderRadius = '10px 10px 0 0';
		} else if (stopRef.current && stop.nearTransports.length === 0) {
			stopRef.current.style.borderRadius = '10px';
		}
	}, [stop.nearTransports]);

	return (
		<main className={s['stop-route']}>
			<section className={s['stop-route__info']}>
				<div
					ref={stopRef}
					className={s['stop-route__header']}
					style={{ background: stopStyles.gradient }}
				>
					<div
						style={{ backgroundColor: stopStyles.background }}
						className={s['stop-route__circle']}
					>
						<img src={imageSrc} alt='Иконка транспорта' />
					</div>
					<h1 className={s['stop-route__title']}>{stop.name}</h1>
				</div>
				{stop.nearTransports.length > 0 && (
					<NearStopTransportList stop={stop} color={stopStyles.background} />
				)}
			</section>

			<section className={s['stop-route__list']}>
				{stop.transports.map((transport) => (
					<TransportInStopItem
						key={transport.id}
						transport={transport}
						styles={stopStyles}
					/>
				))}
			</section>
		</main>
	);
});

export default Stop;
