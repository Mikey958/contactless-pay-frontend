import React from 'react';
import s from './Home.module.scss';
import geoIcon from '../../assets/icons/geo-icon.svg';
import cardDonateIcon from '../../assets/icons/card-donate-icon.svg';
import cardMapIcon from '../../assets/icons/card-map-icon.svg';
import cardPayIcon from '../../assets/icons/card-pay-icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import {
	CHANGE_GEOLOCATION_ROUTE,
	MAIN_ROUTE,
	MAP_ROUTE,
} from '../../utils/consts.js';
import MainTransportList from '../../components/MainTransportList/MainTransportList.jsx';

const Home = () => {
	const navigate = useNavigate();

	return (
		<main className={s.home}>
			<section className={s.home__container}>
				<div className={s['home__welcome-card']}>
					<h1 className={s.home__title}>Добро пожаловать в Transport Pay</h1>
					<p className={s.home__subtitle}>
						{`Оплачивай поездки, отслеживай
						транспорт и сохраняй любимые
						маршруты!`}
					</p>
					<button
						onClick={() => navigate(CHANGE_GEOLOCATION_ROUTE)}
						className={s['home__geo-button']}
					>
						<img
							className={s['home__geo-icon']}
							src={geoIcon}
							alt='геолокация'
						/>
						<p className={s['home__city']}>Екатеринбург</p>
					</button>
				</div>
				<div className={s.home__cards}>
					<Link className={s.home__card} to={MAIN_ROUTE}>
						<img
							className={s['home__card-icon']}
							src={cardPayIcon}
							alt='банковская карта'
						/>
						<p className={s['home__card-title']}>{`Оплатить
						проезд`}</p>
					</Link>
					<Link className={s.home__card} to={MAP_ROUTE}>
						<img
							className={s['home__card-icon']}
							src={cardMapIcon}
							alt='Карта'
						/>
						<p className={s['home__card-title']}>{`Открыть
						карту`}</p>
					</Link>
					<Link className={s.home__card} to={MAIN_ROUTE}>
						<img
							className={s['home__card-icon']}
							src={cardDonateIcon}
							alt='Донат'
						/>
						<p className={s['home__card-title']}>{`Поддержать
						авторов`}</p>
					</Link>
				</div>
			</section>

			<section className={s.home__near}>
				<h2 className={s['home__near-title']}>Ближайший транспорт</h2>
				<MainTransportList></MainTransportList>
			</section>
		</main>
	);
};

export default Home;
