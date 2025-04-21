import React from 'react';
import s from './FavoriteTransportNearItem.module.scss';
import geoIcon from '../../assets/icons/geo-blue-icon.svg';
import clockIcon from '../../assets/icons/clock-white-icon.svg';
import { useNavigate } from 'react-router-dom';
import { TRANSPORT_ROUTE } from '../../utils/consts.js';

const FavoriteTransportNearItem = ({ transport }) => {
	const navigate = useNavigate();

	return (
		<div
			className={s.card}
			onClick={() => navigate(TRANSPORT_ROUTE + '/' + transport.number)}
		>
			<div className={s.card__container}>
				<div className={s.card__wrapper}>{transport.number}</div>
				<div className={s.card__info}>
					<div className={s.card__stop}>
						<img src={geoIcon} alt='Маркер' />
						<p
							className={s.card__stopname}
						>{`Текущая: ${transport.current}`}</p>
					</div>
					<div className={s.card__stop}>
						<img src={geoIcon} alt='Маркер' />
						<p className={s.card__stopname}>{`Следующая: ${transport.next}`}</p>
					</div>
				</div>
			</div>
			<div className={s.card__status}>
				<div className={s.card__timer}>
					<img src={clockIcon} alt='Часы' />
					<p className={s.card__time}>{`через ${transport.status} мин`}</p>
				</div>
				<p className={s.card__fav}>{transport.stop}</p>
			</div>
		</div>
	);
};

export default FavoriteTransportNearItem;
