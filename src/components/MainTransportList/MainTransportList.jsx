import React, { useContext } from 'react';
import { Context } from '../../main.jsx';
import s from './MainTransportList.module.scss';
import TransportItem from '../TransportItem/TransportItem.jsx';
import { observer } from 'mobx-react-lite';
import TransportItemToFavorite from '../TransportItemToFavorite/TransportItemToFavorite.jsx';

const MainTransportList = observer(({ path = 'main' }) => {
	const { transport, nearTransport } = useContext(Context);

	return (
		<div className={s['main-transport-list']}>
			{transport.transports.length === 0 ? (
				<div className={s['main-transport-list__empty']}>
					Транспорт не найден
				</div>
			) : path === 'favorite-add' ? (
				transport.transports.map((transport) => (
					<TransportItemToFavorite key={transport.id} transport={transport} />
				))
			) : (
				nearTransport.nearTransports.map((transport) => (
					<TransportItem key={transport.transport_uuid} transport={transport} />
				))
			)}
		</div>
	);
});

export default MainTransportList;
