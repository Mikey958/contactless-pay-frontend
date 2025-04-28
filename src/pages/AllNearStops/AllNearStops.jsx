import React, { useContext, useState } from 'react';
import arrowIcon from '../../assets/icons/arrow-icon.svg';
import { observer } from 'mobx-react-lite';
import { Context } from '../../main.jsx';
import s from './AllNearStops.module.scss';
import { Link } from 'react-router-dom';
import filterGrayIcon from '../../assets/icons/filter-gray-icon.svg';
import filterBlueIcon from '../../assets/icons/filter-blue-icon.svg';

const AllNearStops = observer(() => {
	const { map } = useContext(Context);

	const [active, setActive] = useState(false);

	return (
		<main className={s['near-stops']}>
			<Link to={-1} className={s['near-stops__link']}>
				<img src={arrowIcon} alt='Стрелка влево' />
			</Link>
			<section className={s['near-stops__content']}>
				<div className={s['near-stops__title-container']}>
					<h1 className={s['near-stops__title']}>Ближайшие остановки</h1>
					<button
						className={`${s['near-stops__button']} ${active ? s['near-stops__button_active'] : ''}`}
						onClick={() => setActive(!active)}
					>
						<img src={active ? filterBlueIcon : filterGrayIcon} alt='фильтер' />
					</button>
				</div>
			</section>
		</main>
	);
});

export default AllNearStops;
