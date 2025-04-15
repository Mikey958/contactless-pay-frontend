import React, { useContext } from 'react';
import s from './History.module.scss';
import basketIcon from '../../assets/icons/basket_icon.svg';
import { Context } from '../../main.jsx';
import HistoryTransportList from '../../components/HistoryTransportList/HistoryTransportList.jsx';
import { observer } from 'mobx-react-lite';

const History = observer(() => {
	const { history } = useContext(Context);

	return (
		<main className={s.history}>
			<section className={s.history__card}>
				<h1 className={s.history__title}>История поездок</h1>
				<p className={s.history__text}>{`Отслеживайте все ваши транспортные
				платежи`}</p>
			</section>

			<section className={s.history__transports}>
				<div className={s.history__wrapper}>
					<h2 className={s.history__subtitle}>Последние поездки</h2>
					<button
						onClick={() => history.clearHistory()}
						className={s.history__clear}
					>
						<img className={s.history__basket} src={basketIcon} alt='Корзина' />
						<p className={s['history__clear-text']}>Очистить</p>
					</button>
				</div>
				<HistoryTransportList />
			</section>
		</main>
	);
});

export default History;
