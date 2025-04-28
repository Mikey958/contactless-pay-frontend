import React from 'react';
import s from './NearStopTransportList.module.scss';
import NearStopTransportsItem from '../StopTransportsItem/NearStopTransportsItem.jsx';
import { observer } from 'mobx-react-lite';

const NearStopTransportList = observer(({ stop, color = '' }) => {
	return (
		<div className={s['transport-list']}>
			{stop.nearTransports.map((transports) => (
				<NearStopTransportsItem
					key={transports.id}
					transports={transports}
					type={stop.type}
					color={color}
				/>
			))}
		</div>
	);
});

export default NearStopTransportList;
