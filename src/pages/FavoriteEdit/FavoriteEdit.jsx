import React, { useContext } from 'react';
import s from './FavoriteEdit.module.scss';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../../main.jsx';
import arrowIcon from '../../assets/icons/arrow-icon.svg';
import getImageSrc from '../../utils/getImageSrc.js';
import { observer } from 'mobx-react-lite';
import NotificationForm from '../../components/NotificationForm/NotificationForm.jsx';

const FavoriteEdit = observer(() => {
	const { route: routeNumber } = useParams();
	const { favorite } = useContext(Context);

	const route = favorite.favorites.find((r) => String(r.route) === routeNumber);
	const [activeIndex, setActiveIndex] = React.useState(0);

	const handleToggle = (index, enabled) => {
		favorite.toggleNotification(route.id, index, enabled);
	};

	const handleSave = (e) => {
		e.preventDefault();
	};

	return (
		<main className={s['notification-edit']}>
			<div className={s['notification-edit__welcome']}>
				<div className={s['notification-edit__circle']}>
					<img
						className={s['notification-edit__transport']}
						src={getImageSrc(route.type, 'white')}
						alt={route.type}
					/>
				</div>
				<p className={s['notification-edit__direction']}>{route.direction}</p>
				<div className={s['notification-edit__route-wrapper']}>
					<p className={s['notification-edit__route']}>{route.route}</p>
				</div>
			</div>
			<section className={s['notification-edit__notifications']}>
				<div className={s['notification-edit__tabs']}>
					{[...Array(10)].map((_, i) => (
						<button
							key={i}
							className={`${s['notification-edit__tab']} ${activeIndex === i ? s['notification-edit__tab_active'] : ''}`}
							onClick={() => setActiveIndex(i)}
						>
							{i + 1}
						</button>
					))}
				</div>

				<NotificationForm
					data={route.notifications[activeIndex]}
					onSave={handleSave}
					index={activeIndex}
				/>
			</section>
		</main>
	);
});

export default FavoriteEdit;
