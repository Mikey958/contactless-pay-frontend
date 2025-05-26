import React, { useContext, useState } from 'react';
import s from './SetLocation.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import arrowDarkIcon from '../../assets/icons/arrow-icon.svg';
import arrowLightIcon from '../../assets/icons/arrow-light-button.svg';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import { Context } from '../../main.jsx';
import { useThemeContext } from '../../contexts/ThemeContext.js';
import { clsx } from 'clsx';
import Modal from '../../components/Modal/Modal.jsx';
import ModalCityContent from '../../components/ModalContent/ModalCityContent/ModalCityContent.jsx';
import { MAIN_ROUTE } from '../../utils/consts.js';

const SetLocation = () => {
	const navigate = useNavigate();
	const { theme } = useThemeContext();
	const { user } = useContext(Context);
	const [activeCity, setActiveCity] = useState(null);
	const [activeModal, setActiveModal] = useState(false);

	const handleSearch = (query) => {
		console.log('Поиск:', query);
	};

	const handleClick = (id) => {
		const city = user.cities?.find((city) => city.name === 'Екатеринбург');
		if (id === city.id) {
			setActiveCity(id);
		} else {
			setActiveModal(true);
		}
	};

	const handleAccept = () => {
		const selectedCity = user.cities.find((city) => city.id === activeCity);
		if (selectedCity) {
			user.setUser({
				...user.user,
				city_name: selectedCity.name,
			});
			navigate(MAIN_ROUTE);
		}
	};

	return (
		<main className={s.location}>
			<section className={s.location__content}>
				<Link to={-1} className={s.location__button}>
					<img
						className={s.location__arrow}
						src={theme === 'dark' ? arrowLightIcon : arrowDarkIcon}
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
								<button
									onClick={() => handleClick(city.id)}
									key={city.id}
									className={clsx(
										s.location__city,
										activeCity === city.id ? s.location__city_active : null
									)}
								>
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
				<button
					onClick={handleAccept}
					disabled={!activeCity}
					className={clsx(s['location__accept-button'])}
				>
					Готово
				</button>
			</section>
			<Modal active={activeModal} setActive={setActiveModal}>
				<ModalCityContent onClose={() => setActiveModal(false)} />
			</Modal>
		</main>
	);
};

export default SetLocation;
