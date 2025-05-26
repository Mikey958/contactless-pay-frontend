import React, { useContext } from 'react';
import s from './ModalLocationContent.module.scss';
import geoIcon from '../../../assets/icons/change-geo-icon.svg';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { CHANGE_GEOLOCATION_ROUTE } from '../../../utils/consts.js';
import { Context } from '../../../main.jsx';

const ModalLocationContent = ({ onClose }) => {
	const navigate = useNavigate();
	const { user } = useContext(Context);

	const handleClickAccept = () => {
		user.setUser({
			...user.user,
			city_name: 'Екатеринбург',
		});
		onClose();
	};

	return (
		<div className={s.content}>
			<div className={s.content__wrapper}>
				<img className={s.content__icon} src={geoIcon} alt='гео-маркер' />
				<p className={s.content__title}>Определение города</p>
			</div>
			<div className={s.content__question}>
				<p className={s.content__subtitle}>Ваш город</p>
				<p className={s.content__city}>Екатеринбург?</p>
			</div>
			<div className={s.content__buttons}>
				<button
					onClick={() => navigate(CHANGE_GEOLOCATION_ROUTE)}
					className={clsx(s.content__button, s.content__button_type_cancel)}
				>
					Нет, изменить
				</button>
				<button
					onClick={handleClickAccept}
					className={clsx(s.content__button, s.content__button_type_accept)}
				>
					Да, верно
				</button>
			</div>
		</div>
	);
};

export default ModalLocationContent;
