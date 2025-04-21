import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { Context } from '../../main.jsx';
import s from './FavoriteTransport.module.scss';
import getImageSrc from '../../utils/getImageSrc.js';
import FavoriteTransportList from '../../components/FavoriteTransportList/FavoriteTransportList.jsx';

const FavoriteTransport = observer(() => {
	const { route: routeNumber } = useParams();
	const { favorite } = useContext(Context);

	const route = favorite.favorites.find((r) => String(r.route) === routeNumber);

	return (
		<main className={s['favorite-transports']}>
			<section className={s['favorite-transports__welcome']}>
				<div className={s['favorite-transports__circle']}>
					<img
						className={s['favorite-transports__transport']}
						src={getImageSrc(route.type, 'white')}
						alt={route.type}
					/>
				</div>
				<p className={s['favorite-transports__direction']}>{route.direction}</p>
				<div className={s['favorite-transports__route-wrapper']}>
					<p className={s['favorite-transports__route']}>{route.route}</p>
				</div>
			</section>

			<section className={s['favorite-transports__container']}>
				<h2 className={s['favorite-transports__subtitle']}>
					Возможно, вам подходит
				</h2>
				<FavoriteTransportList object={route} type='near' />
			</section>

			<section className={s['favorite-transports__container']}>
				<h2 className={s['favorite-transports__subtitle']}>
					Все Т/С на маршруте
				</h2>
				<FavoriteTransportList object={route} type='all' />
			</section>
		</main>
	);
});

export default FavoriteTransport;
