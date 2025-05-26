import React, { useEffect } from 'react';
import s from './Modal.module.scss';
import crossDarkIcon from '../../assets/icons/cross-icon.svg';
import crossWhiteIcon from '../../assets/icons/cross-light-icon.svg';

import { useThemeContext } from '../../contexts/ThemeContext.js';

const Modal = ({ active, setActive, enableCross = true, children }) => {
	const { theme } = useThemeContext();

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
				style={
					theme === 'light'
						? { border: '1px solid #ffffff' }
						: { border: '1px solid #404040' }
				}
			>
				{enableCross && (
					<button className={s.modal__close} onClick={() => setActive(false)}>
						<img
							src={theme === 'light' ? crossDarkIcon : crossWhiteIcon}
							alt='Крестик'
						/>
					</button>
				)}
				{children}
			</div>
		</div>
	);
};

export default Modal;
