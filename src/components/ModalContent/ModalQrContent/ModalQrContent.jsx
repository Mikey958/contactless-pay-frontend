import React from 'react';
import s from './ModalQrContent.module.scss';
import QRCode from 'react-qr-code';

const ModalQrContent = ({ value }) => {
	return (
		<div className={s.content}>
			<p className={s.content__title}>QR-код для оплаты</p>
			<div className={s.content__wrapper}>
				<QRCode
					className={s.content__qr}
					value='https://istudent.urfu.ru'
					size={1024}
					bgColor='var(--first-background-color)'
					fgColor='var(--first-text-color)'
					style={{ width: '100%', height: '100%' }}
					level='H'
				/>
			</div>
			<button className={s.content__button}>Поделиться</button>
		</div>
	);
};

export default ModalQrContent;
