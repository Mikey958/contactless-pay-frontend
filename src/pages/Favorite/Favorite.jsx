import React, { useContext } from 'react';
import { Context } from '../../main.jsx';
import s from './Favorite.module.scss';
import FavoriteEmpty from '../../components/FavoriteEmpty/FavoriteEmpty.jsx';
import { Link } from 'react-router-dom';
import { FAVORITE_ADD_ROUTE } from '../../utils/consts.js';
import { observer } from 'mobx-react-lite';
import FavoriteList from '../../components/FavoriteList/FavoriteList.jsx';

const Favorite = observer(() => {
	const { favorite } = useContext(Context);

	return (
		<main className={s['favorite-page']}>
			{favorite.favorites.length === 0 ? (
				<FavoriteEmpty />
			) : (
				<>
					<div className={s['favorite-page__welcome']}>
						<h1 className={s['favorite-page__title']}>Избранное</h1>
						<p
							className={s['favorite-page__text']}
						>{`Быстрый доступ к вашим любимым
						маршрутам`}</p>
					</div>
					<section className={s['favorite-page__favorite']}>
						<div className={s['favorite-page__saved']}>
							<h2 className={s['favorite-page__subtitle']}>
								Сохранённые маршруты
							</h2>
							<Link
								to={FAVORITE_ADD_ROUTE}
								className={s['favorite-page__add-button']}
							>
								+
							</Link>
						</div>
						<FavoriteList />
					</section>
				</>
			)}
		</main>
	);
});

export default Favorite;
