import React from 'react';
import s from './TransportItem.module.scss';
import getImageSrc from '../../utils/getImageSrc.js';
import likeBtn from '../../assets/icons/like-button.svg';
import { useNavigate } from 'react-router-dom';
import { TRANSPORT_ROUTE } from '../../utils/consts.js';
const TransportItem = ({ transport }) => {
	const navigate = useNavigate();
	return (
		<div
			className={s.card}
			onClick={() => navigate(TRANSPORT_ROUTE + '/' + transport.number)}
		>
			<div className={s.card__transport}>
				<img
					className={s.card__icon}
					src={getImageSrc(transport.type)}
					alt={transport.type}
				/>
				<div className={s.card__info}>
					<div className={s['card__main-info']}>
						<div className={s.card__naming}>
							<p className={s.card__route}>{transport.route}</p>
							<div className={s.card__wrapper}>
								<p className={s.card__number}>{transport.number}</p>
							</div>
						</div>
						<p className={s.card__direction}>{transport.direction}</p>
					</div>
					<p className={s.card__stations}>
						<span
							className={s.card__station}
						>{`текущая: ${transport.current}`}</span>
						<span
							className={s.card__station}
						>{`следующая: ${transport.next}`}</span>
					</p>
				</div>
			</div>
			<div className={s['card__status-wrapper']}>
				<button className={s.card__button}>
					<img className={s['card__button-icon']} src={likeBtn} alt='сердце' />
				</button>
				<p className={s.card__status}>{transport.status}</p>
				<div className={s.card__price}>{`${transport.price.toFixed(1)}₽`}</div>
			</div>
		</div>
	);
};

export default TransportItem;
