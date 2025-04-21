import React, { useState } from 'react';
import FavoriteTransportNearItem from '../FavoriteTransportNearItem/FavoriteTransportNearItem.jsx';
import FavoriteTransportDefaultItem from '../FavoriteTransportDefaultItem/FavoriteTransportDefaultItem.jsx';
import s from './FavoriteTransportList.module.scss';

const FavoriteTransportList = ({ object, type }) => {
	const [showAll, setShowAll] = useState(false);

	const renderNear = () => {
		const transports = showAll
			? object.nearTransports
			: object.nearTransports.slice(0, 2);

		return (
			<div className={s['favorite-transport-list']}>
				<div className={s['favorite-transport-list__transports']}>
					{transports.map((transport) => (
						<FavoriteTransportNearItem
							key={transport.id}
							transport={transport}
						/>
					))}
				</div>

				{object.nearTransports.length > 2 && (
					<button
						className={s['favorite-transport-list__button']}
						onClick={() => setShowAll((prev) => !prev)}
					>
						{showAll ? 'свернуть' : 'показать больше'}
					</button>
				)}
			</div>
		);
	};

	const renderAll = () => {
		return (
			<div className={s['favorite-transport-list']}>
				{object.transports.map((transport) => (
					<FavoriteTransportDefaultItem
						key={transport.id}
						transport={transport}
					/>
				))}
			</div>
		);
	};

	return <>{type === 'near' ? renderNear() : renderAll()}</>;
};

export default FavoriteTransportList;
