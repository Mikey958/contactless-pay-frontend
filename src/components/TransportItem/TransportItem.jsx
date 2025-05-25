import React, { useContext } from 'react';
import s from './TransportItem.module.scss';
import getImageSrc from '../../utils/getImageSrc.js';
import likeBtn from '../../assets/icons/like-button.svg';
import likeBtnActive from '../../assets/icons/like-button-active.svg';
import { useNavigate } from 'react-router-dom';
import { TRANSPORT_ROUTE } from '../../utils/consts.js';
import { clsx } from 'clsx';
import { formatArrivalTime } from '../../utils/formatArrivalTime.js';
import { observer } from 'mobx-react-lite';
import { Context } from '../../main.jsx';

const TransportItem = observer(({ transport }) => {
	const { nearTransport } = useContext(Context);
	const navigate = useNavigate();

	const handleLikeClick = (e) => {
		e.stopPropagation();
		nearTransport.toggleFavourite(transport.transport_uuid);
	};
	return (
		<div
			className={s.card}
			onClick={() => navigate(TRANSPORT_ROUTE + '/' + transport.transport_uuid)}
		>
			<div className={s.card__transport}>
				<img
					className={s.card__icon}
					src={getImageSrc(transport.transport_type)}
					alt={transport.transport_type}
				/>
				<div className={s.card__info}>
					<div className={s['card__main-info']}>
						<div className={s.card__naming}>
							<p className={s.card__route}>{transport.route_number}</p>
							<div className={s.card__wrapper}>
								<p className={s.card__number}>{transport.state_number}</p>
							</div>
						</div>
						<p className={s.card__direction}>{transport.route_title}</p>
					</div>
					<p className={s.card__stations}>
						<span
							className={s.card__station}
						>{`текущая: ${transport.current_stop}`}</span>
						<span
							className={s.card__station}
						>{`следующая: ${transport.next_stop}`}</span>
					</p>
				</div>
			</div>
			<div className={s['card__status-wrapper']}>
				<button
					onClick={handleLikeClick}
					className={clsx(
						s.card__button,
						transport.is_favourite && s.card__button_active
					)}
				>
					<img
						className={s['card__button-icon']}
						src={transport.is_favourite ? likeBtnActive : likeBtn}
						alt='сердце'
					/>
				</button>
				<p className={s.card__status}>
					{formatArrivalTime(transport.arrival_time)}
				</p>
				<div className={s.card__price}>{`${transport.price}.0₽`}</div>
			</div>
		</div>
	);
});

export default TransportItem;
