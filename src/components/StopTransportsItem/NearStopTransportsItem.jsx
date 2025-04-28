import React, { useRef } from 'react';
import s from './NearStopTransportsItem.module.scss';
import arrowIcon from '../../assets/icons/full-arrow-icon.svg';
import getStopStyle from '../../utils/getStopStyle.js';

const NearStopTransportsItem = ({ transports, type }) => {
	const transportsStyle = getStopStyle(type);

	return (
		<div className={s.transports}>
			<div className={s.transports__routes}>
				{transports.routes.map((route, index) => (
					<div
						key={index}
						className={s.transports__route}
						style={{ backgroundColor: transportsStyle.color }}
					>
						{route}
					</div>
				))}
			</div>
			<img src={arrowIcon} alt='Стрелка вправо' />
			<p
				className={s.transports__next}
				style={{ color: transportsStyle.color }}
			>
				{transports.next}
			</p>
		</div>
	);
};

export default NearStopTransportsItem;
