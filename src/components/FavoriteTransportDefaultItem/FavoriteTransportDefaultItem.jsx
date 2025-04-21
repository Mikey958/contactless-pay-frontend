import React from 'react';
import s from './FavoriteTransportDefaultItem.module.scss';
import geoIcon from '../../assets/icons/geo-blue-icon.svg';
import { TRANSPORT_ROUTE } from '../../utils/consts.js';
import { useNavigate } from 'react-router-dom';

const FavoriteTransportDefaultItem = ({ transport }) => {
	const navigate = useNavigate();

	return (
		<div
			className={s.card}
			onClick={() => navigate(TRANSPORT_ROUTE + '/' + transport.number)}
		>
			<div className={s.card__wrapper}>{transport.number}</div>
			<div className={s.card__status}>
				<div className={s.card__stop}>
					<img src={geoIcon} alt='Маркер' />
					<p className={s.card__stopname}>{`Текущая: ${transport.current}`}</p>
				</div>
				<div className={s.card__stop}>
					<img src={geoIcon} alt='Маркер' />
					<p className={s.card__stopname}>{`Следующая: ${transport.next}`}</p>
				</div>
			</div>
		</div>
	);
};

export default FavoriteTransportDefaultItem;
