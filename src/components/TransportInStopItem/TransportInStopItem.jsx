import React from 'react';
import s from './TransportInStopItem.module.scss';
import getStopStyle from '../../utils/getStopStyle.js';
import { useNavigate } from 'react-router-dom';
import { TRANSPORT_ROUTE } from '../../utils/consts.js';

const TransportInStopItem = ({ transport, styles }) => {
	const navigate = useNavigate();

	return (
		<div
			className={s.card}
			onClick={() => navigate(TRANSPORT_ROUTE + '/' + transport.number)}
		>
			<div className={s.card__coontainer}>
				<img src={styles.src} alt='Иконка транспорта' />
				<div className={s.card__info}>
					<div className={s.card__title}>
						<p className={s.card__route}>{transport.route}</p>
						<div className={s.card__number}>{transport.number}</div>
					</div>
					<p className={s.card__direction}>{transport.direction}</p>
				</div>
			</div>
			<div className={s.card__block}>
				<p style={{ color: styles.color }} className={s.card__status}>
					{transport.status}
				</p>
				<div
					style={{ backgroundColor: styles.color }}
					className={s.card__price}
				>{`${transport.price}.0₽`}</div>
			</div>
		</div>
	);
};

export default TransportInStopItem;
