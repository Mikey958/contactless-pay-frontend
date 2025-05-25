import React, { useContext } from 'react';
import s from './HistoryTransportList.module.scss';
import HistoryItem from '../HistoryItem/HistoryItem.jsx';
import { Context } from '../../main.jsx';
import { observer } from 'mobx-react-lite';

const HistoryTransportList = observer(() => {
	const { history } = useContext(Context);
	return (
		<div className={s['history-transport-list']}>
			{history.history.length === 0 ? (
				<div className={s['history-transport-list__empty']}>
					Вы не совершали поездок
				</div>
			) : (
				history.history.map((history) => (
					<HistoryItem key={history.id} history={history} />
				))
			)}
		</div>
	);
});

export default HistoryTransportList;
