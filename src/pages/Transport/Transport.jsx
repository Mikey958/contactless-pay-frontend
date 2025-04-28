import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../main.jsx';
import { observer } from 'mobx-react-lite';
import s from './Transport.module.scss';
import getImageSrc from '../../utils/getImageSrc.js';
import likeIcon from '../../assets/icons/like-button.svg';

const Transport = observer(() => {
	const { number: numberRoute } = useParams();
	const { transport } = useContext(Context);

	const obj = transport.transports.find(
		(r) => String(r.number) === numberRoute
	);

	return (
		<main className={s.transport}>
			<section className={s.transport__welcome}>
				<div className={s.transport__circle}>
					<img
						className={s.transport__icon}
						src={getImageSrc(obj.type, 'white')}
						alt={obj.type}
					/>
				</div>
				<p className={s.transport__direction}>{obj.direction}</p>
				<div className={s['transport__route-wrapper']}>
					<p className={s.transport__route}>{obj.route}</p>
				</div>
			</section>
			<section className={s.transport__container}>
				<button className={s.transport__like}>
					<img src={likeIcon} alt='лайк' />
				</button>
				<div className={s.transport__wrapper}>
					<p className={s.transport__title}>Номер транспортного средства</p>
					<p className={s.transport__text}>{obj.number}</p>
				</div>
				<div className={s.transport__wrapper}>
					<p className={s.transport__title}>Текущая остановка</p>
					<p className={s.transport__text}>{obj.current}</p>
				</div>
				<div className={s.transport__wrapper}>
					<p className={s.transport__title}>Следующая остановка</p>
					<p className={s.transport__text}>{obj.next}</p>
				</div>
				<div className={s['transport__price-wrapper']}>
					<p className={s.transport__title}>Цена проезда</p>
					<p className={s.transport__price}>{`${obj.price}.0₽`}</p>
				</div>
			</section>
			<button className={s.transport__pay}>Оплатить проезд</button>
			<button className={s.transport__links}>
				Дополнительные ссылки для оплаты
			</button>
			<div className={s.transport__buttons}>
				<button className={s.transport__button}>Сгенерировать QR</button>
				<button className={s.transport__button}>Поделиться</button>
			</div>
		</main>
	);
});

export default Transport;
