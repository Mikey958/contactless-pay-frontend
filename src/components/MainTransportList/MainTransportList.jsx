import React, { useContext } from 'react';
import { Context } from '../../main.jsx';
import s from './MainTransportList.module.scss';
import TransportItem from '../TransportItem/TransportItem.jsx';
import { observer } from 'mobx-react-lite';

const MainTransportList = observer(() => {
	const { transport } = useContext(Context);

	return (
		<div className={s['main-transport-list']}>
			{transport.transports.length === 0 ? (
				<div className={s['main-transport-list__empty']}>
					Транспорт не найден
				</div>
			) : (
				transport.transports.map((transport) => (
					<TransportItem key={transport.id} transport={transport} />
				))
			)}
		</div>
	);
});

export default MainTransportList;
