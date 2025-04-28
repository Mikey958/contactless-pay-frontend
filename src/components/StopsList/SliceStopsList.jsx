import React, { useContext } from 'react';
import s from './SliceStopsList.module.scss';
import { observer } from 'mobx-react-lite';
import { Context } from '../../main.jsx';
import NearStop from '../NearStop/NearStop.jsx';

const SliceStopsList = observer(() => {
	const { map } = useContext(Context);

	return (
		<div className={s.stoplist}>
			{map.nearStops.slice(0, 3).map((stop) => (
				<NearStop key={stop.id} stop={stop} />
			))}
		</div>
	);
});

export default SliceStopsList;
