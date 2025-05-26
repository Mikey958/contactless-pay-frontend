import React from 'react';
import s from './ModalCityContent.module.scss';
import warningIcon from '../../../assets/icons/warning-icon.svg';

const ModalCityContent = ({ onClose }) => {
	return (
		<div className={s.content}>
			<img src={warningIcon} alt='Осторожно' />
			<div className={s.content__info}>
				<p className={s.content__title}>{`Город недоступен`}</p>
				<p className={s.content__description}>{`К сожалению, выбранный город
				временно недоступен.
				Пожалуйста, выберите другой город.`}</p>
				<button className={s.content__button} onClick={onClose}>
					ОК
				</button>
			</div>
		</div>
	);
};

export default ModalCityContent;
