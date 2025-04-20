import React from 'react';
import s from './FavoriteItem.module.scss';
import getImageSrc from '../../utils/getImageSrc.js';
import { Link } from 'react-router-dom';
import editIcon from '../../assets/icons/edit-icon.svg';
import alertIcon from '../../assets/icons/favorite-alert-icon.svg';
import { observer } from 'mobx-react-lite';
import getNotificationWord from '../../utils/getNotificationWord.js';

const FavoriteItem = observer(({ favorite }) => {
	return (
		<div className={s.card}>
			<Link to='#' className={s.card__edit}>
				<img className={s.card__icon} src={editIcon} alt='Редактировать' />
			</Link>
			<div className={s.card__container}>
				<img
					className={s.card__logo}
					src={getImageSrc(favorite.type)}
					alt={favorite.type}
				/>
				<div className={s.card__info}>
					<p className={s.card__number}>{favorite.number}</p>
					<p className={s.card__direction}>{favorite.direction}</p>
					{favorite.alertCnt > 0 ? (
						<div className={s['card__alert-wrapper']}>
							<img
								className={s.card__alert}
								src={alertIcon}
								alt='Колокольчик'
							/>
							<p
								className={s['card__alert-count']}
							>{`${favorite.alertCnt} ${getNotificationWord(favorite.alertCnt)}`}</p>
						</div>
					) : null}
				</div>
			</div>
			<div className={s.card__price}>{`${favorite.price}.0₽`}</div>
		</div>
	);
});

export default FavoriteItem;
