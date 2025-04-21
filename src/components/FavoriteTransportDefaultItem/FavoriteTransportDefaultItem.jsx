import React from 'react';
import s from './FavoriteTransportDefaultItem.module.scss';
import geoIcon from '../../assets/icons/geo-blue-icon.svg';

const FavoriteTransportDefaultItem = ({ transport }) => {
	return (
		<div className={s.card}>
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
