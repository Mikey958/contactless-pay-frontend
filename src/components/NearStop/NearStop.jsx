import React, { useEffect, useRef } from 'react';
import s from './NearStop.module.scss';
import getStopStyle from '../../utils/getStopStyle.js';
import { Link } from 'react-router-dom';
import arrowIcon from '../../assets/icons/arrow-blue-icon.svg';
import NearStopTransportList from '../StopTransportList/NearStopTransportList.jsx';
import { observer } from 'mobx-react-lite';
import { STOP_ROUTE } from '../../utils/consts.js';

const NearStop = observer(({ stop }) => {
	const stopStyle = getStopStyle(stop.type);
	const stopElem = useRef();

	useEffect(() => {
		if (stopElem.current && stop.nearTransports.length > 0) {
			stopElem.current.style.borderRadius = '10px 10px 0 0';
		} else if (stopElem.current && stop.nearTransports.length === 0) {
			stopElem.current.style.borderRadius = '10px';
		}
	}, [stop.nearTransports]);

	return (
		<div className={s.stop}>
			<div ref={stopElem} className={s.stop__header}>
				<div className={s.stop__container}>
					<img className={s.stop__icon} src={stopStyle.src} alt='Транспорт' />
					<div className={s.stop__info}>
						<p className={s.stop__name}>{stop.name}</p>
						<p
							className={s.stop__distance}
						>{`до остановки ${stop.distance} км`}</p>
					</div>
				</div>
				<Link to={STOP_ROUTE + '/' + stop.id} className={s.stop__link}>
					<img src={arrowIcon} alt='Стрелка вправо' />
				</Link>
			</div>
			{stop.nearTransports.length > 0 && <NearStopTransportList stop={stop} />}
		</div>
	);
});

export default NearStop;
