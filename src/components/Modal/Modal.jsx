import React, { useEffect } from 'react';
import s from './Modal.module.scss';
import crossIcon from '../../assets/icons/cross-icon.svg';

const Modal = ({ active, setActive, children }) => {
	useEffect(() => {
		if (active) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [active]);

	return (
		<div
			className={`${s.modal} ${active ? s.modal_active : ''}`}
			onClick={() => setActive(false)}
		>
			<div
				className={`${s.modal__content} ${active ? s.modal__content_active : ''}`}
				onClick={(e) => e.stopPropagation()}
			>
				<button className={s.modal__close} onClick={() => setActive(false)}>
					<img src={crossIcon} alt='Крестик' />
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
