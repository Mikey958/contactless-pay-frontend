import React, { useContext } from 'react';
import s from './SetLocation.module.scss';
import { Link } from 'react-router-dom';
import arrowIcon from '../../assets/icons/arrow-icon.svg';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import { Context } from '../../main.jsx';

const SetLocation = () => {
	const { user } = useContext(Context);

	const handleSearch = (query) => {
		console.log('Поиск:', query);
	};

	return (
		<main className={s.location}>
			<section className={s.location__content}>
				<Link to={-1} className={s.location__button}>
					<img
						className={s.location__arrow}
						src={arrowIcon}
						alt='Стрелка влево'
					/>
				</Link>
				<section className={s['location__pick-container']}>
					<h1 className={s.location__title}>Выберите вашу локацию</h1>
					<p
						className={s.location__subtitle}
					>{`Выберите ваш город, чтобы увидеть
				соответствующий транспорт`}</p>
					<SearchBar
						placeholder='Поиск по названию города...'
						onSearch={handleSearch}
					/>
				</section>

				<section className={s['location__popular-container']}>
					<h2 className={s.location__popular}>Популярные города</h2>
					<div className={s['location__cities-list']}>
						{Array.isArray(user.cities) &&
							user.cities.map((city) => (
								<button key={city.id} className={s.location__city}>
									{city.name}
								</button>
							))}
					</div>
				</section>
			</section>

			<section className={s['location__main-buttons']}>
				<Link to={-1} className={s['location__back-button']}>
					Выбрать позже
				</Link>
				<button className={s['location__accept-button']}>Готово</button>
			</section>
		</main>
	);
};

export default SetLocation;
