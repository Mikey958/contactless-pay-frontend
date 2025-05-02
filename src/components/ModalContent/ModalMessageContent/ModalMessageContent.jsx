import React from 'react';
import s from './ModalMessageContent.module.scss';
import warningIcon from '../../../assets/icons/warning-icon.svg';

const ModalMessageContent = ({ onClose }) => {
	return (
		<div className={s.content}>
			<img src={warningIcon} alt='Осторожно' />
			<div className={s.content__info}>
				<p className={s.content__title}>{`Не получилось
			оплатить проезд`}</p>
				<p className={s.content__description}>{`Попробуйте воспользоваться
			дополнительными ссылками
			для оплаты проезда!`}</p>
				<button className={s.content__button} onClick={onClose}>
					ОК
				</button>
			</div>
		</div>
	);
};

export default ModalMessageContent;
