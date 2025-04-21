import React from 'react';
import { observer } from 'mobx-react-lite';
import s from './TransportItemToFavorite.module.scss';
import getImageSrc from '../../utils/getImageSrc.js';
import { useNavigate } from 'react-router-dom';
import { TRANSPORT_ROUTE } from '../../utils/consts.js';

const TransportItemToFavorite = observer(({ transport }) => {
	const navigate = useNavigate();

	return (
		<div
			className={s.card}
			onClick={() => navigate(TRANSPORT_ROUTE + '/' + transport.number)}
		>
			<div className={s.card__container}>
				<img
					className={s.card__logo}
					src={getImageSrc(transport.type)}
					alt={transport.type}
				/>
				<div className={s.card__info}>
					<p className={s.card__number}>{transport.route}</p>
					<p className={s.card__direction}>{transport.direction}</p>
				</div>
			</div>
			<div className={s.card__price}>{`${transport.price}.0₽`}</div>
		</div>
	);
});

export default TransportItemToFavorite;
