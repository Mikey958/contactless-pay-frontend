import React, { useContext } from 'react';
import { Context } from '../../main.jsx';
import { observer } from 'mobx-react-lite';
import s from './FavoriteList.module.scss';
import FavoriteItem from '../FavoriteItem/FavoriteItem.jsx';

const FavoriteList = observer(() => {
	const { favorite } = useContext(Context);

	return (
		<div className={s['favorite-list']}>
			{favorite.favorites.map((favorite) => (
				<FavoriteItem key={favorite.id} favorite={favorite} />
			))}
		</div>
	);
});

export default FavoriteList;
