import React, { useContext } from 'react';
import s from './History.module.scss';
import basketIcon from '../../assets/icons/basket_icon.svg';
import { Context } from '../../main.jsx';
import HistoryTransportList from '../../components/HistoryTransportList/HistoryTransportList.jsx';
import { observer } from 'mobx-react-lite';
import IntroBlock from '../../components/IntroBlock/IntroBlock.jsx';

const History = observer(() => {
	const { history } = useContext(Context);

	return (
		<main className={s.history}>
			<IntroBlock
				title='История поездок'
				description={'Отслеживайте все ваши транспортные\n' + 'платежи'}
				marginBottom='0'
			/>

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
