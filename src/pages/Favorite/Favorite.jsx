import React, { useContext } from 'react';
import { Context } from '../../main.jsx';
import s from './Favorite.module.scss';
import FavoriteEmpty from '../../components/FavoriteEmpty/FavoriteEmpty.jsx';
import { Link } from 'react-router-dom';
import { FAVORITE_ADD_ROUTE } from '../../utils/consts.js';
import { observer } from 'mobx-react-lite';
import FavoriteList from '../../components/FavoriteList/FavoriteList.jsx';
import IntroBlock from '../../components/IntroBlock/IntroBlock.jsx';

const Favorite = observer(() => {
	const { favorite } = useContext(Context);

	return (
		<main className={s['favorite-page']}>
			{favorite.favorites.length === 0 ? (
				<FavoriteEmpty />
			) : (
				<>
					<IntroBlock
						title='Избранное'
						description={`Быстрый доступ к вашим любимым
						маршрутам`}
						marginBottom='10px'
					/>
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
