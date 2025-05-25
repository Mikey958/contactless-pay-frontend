import React from 'react';
import s from './ModalLinksContent.module.scss';
import { createLink } from '../../../utils/createLink.js';
import log from 'eslint-plugin-react/lib/util/log.js';

const ModalLinksContent = ({ onClose, open, links }) => {
	const handleClick = (payTag) => {
		if (payTag) {
			window.open(createLink(payTag), '_blank');
			onClose();
			open();
		}
	};

	return (
		<div className={s.content}>
			<p className={s.content__title}>{`Дополнительные ссылки
		для оплаты`}</p>
			<div className={s.content__buttons}>
				{links?.map((paytag, index) => (
					<button
						key={paytag.id}
						className={s.content__button}
						onClick={() => handleClick(paytag.pay_tag_id)}
					>
						{`ссылка ${index + 1}`}
					</button>
				))}
			</div>
		</div>
	);
};

export default ModalLinksContent;
