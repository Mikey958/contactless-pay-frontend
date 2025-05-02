import React from 'react';
import s from './ModalLinksContent.module.scss';

const ModalLinksContent = ({ onClose, open }) => {
	const handleClick = () => {
		window.open('https://istudent.urfu.ru', '_blank');
		onClose();
		open();
	};

	return (
		<div className={s.content}>
			<p className={s.content__title}>{`Дополнительные ссылки
		для оплаты`}</p>
			<div className={s.content__buttons}>
				<button className={s.content__button} onClick={handleClick}>
					ссылка 1
				</button>
				<button className={s.content__button} onClick={handleClick}>
					ссылка 2
				</button>
				<button className={s.content__button} onClick={handleClick}>
					ссылка 3
				</button>
			</div>
		</div>
	);
};

export default ModalLinksContent;
