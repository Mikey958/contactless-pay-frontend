import React from 'react';
import s from './ModalQuestionContent.module.scss';
import funnySmileIcon from '../../../assets/icons/funny-smile-icon.svg';
import sadSmileIcon from '../../../assets/icons/sad-smile-icon.svg';

const ModalQuestionContent = ({ onClose, openModal }) => {
	const handleClick = () => {
		onClose();
		openModal();
	};

	return (
		<div className={s.content}>
			<p className={s.content__title}>{`У вас получилось
		оплатить проезд?`}</p>
			<div className={s.content__buttons}>
				<button
					className={`${s.content__button} ${s.content__button_yes}`}
					onClick={onClose}
				>
					<img src={funnySmileIcon} alt='Веселый смайлик' />
					<p className={s.content__true}>Да, всё получилось</p>
				</button>
				<button
					className={`${s.content__button} ${s.content__button_no}`}
					onClick={handleClick}
				>
					<img src={sadSmileIcon} alt='Грустный смайлик' />
					<p className={s.content__false}>Нет, не получилось</p>
				</button>
			</div>
		</div>
	);
};

export default ModalQuestionContent;
