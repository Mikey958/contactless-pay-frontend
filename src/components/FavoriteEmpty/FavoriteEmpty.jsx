import React from 'react';
import s from './FavoriteEmpty.module.scss';
import starIcon from '../../assets/icons/star-icon.svg';
import { Link } from 'react-router-dom';
import { FAVORITE_ADD_ROUTE } from '../../utils/consts.js';

const FavoriteEmpty = () => {
	return (
		<section className={s['favorite-empty']}>
			<div className={s['favorite-empty__circle']}>
				<img
					className={s['favorite-empty__star']}
					src={starIcon}
					alt='Звезда'
				/>
			</div>
			<div className={s['favorite-empty__empty-text-container']}>
				<h1 className={s['favorite-empty__empty-title']}>
					Нет любимых маршрутов
				</h1>
				<p
					className={s['favorite-empty__empty-text']}
				>{`Добавьте свой любимый маршрут,
					чтобы получить к нему быстрый доступ`}</p>
			</div>
			<Link to={FAVORITE_ADD_ROUTE} className={s['favorite-empty__link']}>
				+ Добавить маршрут
			</Link>
		</section>
	);
};

export default FavoriteEmpty;
