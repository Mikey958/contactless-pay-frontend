import React from 'react';
import getImageSrc from '../../utils/getImageSrc.js';
import calendarIcon from '../../assets/icons/calendar_icon.svg';
import clockIcon from '../../assets/icons/clock_icon.svg';
import s from './HistoryItem.module.scss';

const HistoryItem = ({ history }) => {
	return (
		<div className={s.card}>
			<div className={s.card__history}>
				<img
					className={s.card__icon}
					src={getImageSrc(history.transport_type)}
					alt={history.transport_type}
				/>
				<div className={s.card__info}>
					<div className={s['card__main-info']}>
						<div className={s.card__naming}>
							<p className={s.card__route}>{history.route_number}</p>
							<div className={s.card__wrapper}>
								<p className={s.card__number}>{history.state_number}</p>
							</div>
						</div>
						<p className={s.card__direction}>{history.route_title}</p>
					</div>
					<div className={s['card__date-wrapper']}>
						<div className={s.card__moment}>
							<img
								className={s['card__moment-icon']}
								src={calendarIcon}
								alt='Каледндарь'
							/>
							<p className={s['card__moment-text']}>{history.date}</p>
						</div>
						<div className={s.card__moment}>
							<img
								className={s['card__moment-icon']}
								src={clockIcon}
								alt='Часы'
							/>
							<p className={s['card__moment-text']}>{history.time}</p>
						</div>
					</div>
				</div>
			</div>
			<div className={s.card__status}>
				<div className={s.card__price}>{`${history.price}.0₽`}</div>
			</div>
		</div>
	);
};

export default HistoryItem;
