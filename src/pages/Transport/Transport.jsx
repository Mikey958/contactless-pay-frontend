import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import s from './Transport.module.scss';
import getImageSrc from '../../utils/getImageSrc.js';
import likeIcon from '../../assets/icons/like-button.svg';
import Modal from '../../components/Modal/Modal.jsx';
import ModalQrContent from '../../components/ModalContent/ModalQrContent/ModalQrContent.jsx';
import ModalLinksContent from '../../components/ModalContent/ModalLinksContent/ModalLinksContent.jsx';
import ModalQuestionContent from '../../components/ModalContent/ModalQuestionContent/ModalQuestionContent.jsx';
import ModalMessageContent from '../../components/ModalContent/ModalMessageContent/ModalMessageContent.jsx';
import { MoonLoader } from 'react-spinners';
import { clsx } from 'clsx';
import { createLink } from '../../utils/createLink.js';

const Transport = observer(() => {
	const { uuid } = useParams();
	const [transport, setTransport] = useState(null);

	useEffect(() => {
		let cancelled = false;

		const timeoutId = setTimeout(() => {
			if (cancelled) return;

			const mockTransportData = {
				route_number: '82',
				route_title: 'ЖБИ - СТЦ Мега',
				route_id: '232',
				transport_type: 'bus',
				state_number: 'А123БВ',
				price: 30,
				is_favourite: true,
				current_stop: 'ЖБИ',
				next_stop: 'СТЦ Мега',
				user_uuid: '123',
				paytagid: [
					{ id: 1, pay_tag_id: 123 },
					{ id: 2, pay_tag_id: 132 },
					{ id: 3, pay_tag_id: 112 },
					{ id: 4, pay_tag_id: 122 },
					{ id: 5, pay_tag_id: 122 },
					{ id: 6, pay_tag_id: 122 },
				],
			};

			setTransport(mockTransportData);
		}, 1000);

		return () => {
			cancelled = true;
			clearTimeout(timeoutId);
		};
	}, [uuid]);

	const [modalQrActive, setModalQrActive] = useState(false);
	const [modalLinksActive, setModalLinksActive] = useState(false);
	const [modalQuestionActive, setModalQuestionActive] = useState(false);
	const [modalMessageActive, setModalMessageActive] = useState(false);

	const handleClick = (payTagObj) => {
		if (payTagObj.pay_tag_id) {
			const id = payTagObj.pay_tag_id;
			window.open(createLink(id), '_blank');
			setModalQuestionActive(true);
		}
	};

	if (!transport) {
		return (
			<main className={clsx(s.transport, s.transport__loading)}>
				<MoonLoader color='var(--first-text-color)' size={30} />
			</main>
		);
	}

	const [firstItem, ...restItems] = transport?.paytagid || [];

	return (
		<main className={s.transport}>
			<section className={s.transport__welcome}>
				<div className={s.transport__circle}>
					<img
						className={s.transport__icon}
						src={getImageSrc(transport.transport_type, 'white')}
						alt={transport.transport_type}
					/>
				</div>
				<p className={s.transport__direction}>{transport.route_title}</p>
				<div className={s['transport__route-wrapper']}>
					<p className={s.transport__route}>{transport.route_number}</p>
				</div>
			</section>
			<section className={s.transport__container}>
				<button className={s.transport__like}>
					<img src={likeIcon} alt='лайк' />
				</button>
				<div className={s.transport__wrapper}>
					<p className={s.transport__title}>Номер транспортного средства</p>
					<p className={s.transport__text}>{transport.state_number}</p>
				</div>
				<div className={s.transport__wrapper}>
					<p className={s.transport__title}>Текущая остановка</p>
					<p className={s.transport__text}>{transport.current_stop}</p>
				</div>
				<div className={s.transport__wrapper}>
					<p className={s.transport__title}>Следующая остановка</p>
					<p className={s.transport__text}>{transport.next_stop}</p>
				</div>
				<div className={s['transport__price-wrapper']}>
					<p className={s.transport__title}>Цена проезда</p>
					<p className={s.transport__price}>{`${transport.price}.0₽`}</p>
				</div>
			</section>
			<button
				className={s.transport__pay}
				onClick={() => handleClick(firstItem)}
			>
				Оплатить проезд
			</button>
			<button
				className={s.transport__links}
				onClick={() => setModalLinksActive(true)}
			>
				Дополнительные ссылки для оплаты
			</button>
			<div className={s.transport__buttons}>
				<button
					className={s.transport__button}
					onClick={() => setModalQrActive(true)}
				>
					Сгенерировать QR
				</button>
				<button className={s.transport__button}>Поделиться</button>
			</div>
			<Modal active={modalQrActive} setActive={setModalQrActive}>
				<ModalQrContent value={firstItem} />
			</Modal>
			<Modal active={modalLinksActive} setActive={setModalLinksActive}>
				<ModalLinksContent
					links={restItems}
					onClose={() => setModalLinksActive(false)}
					open={() => setModalQuestionActive(true)}
				/>
			</Modal>
			<Modal active={modalQuestionActive} setActive={setModalQuestionActive}>
				<ModalQuestionContent
					obj={transport}
					onClose={() => setModalQuestionActive(false)}
					openModal={() => setModalMessageActive(true)}
				/>
			</Modal>
			<Modal active={modalMessageActive} setActive={setModalMessageActive}>
				<ModalMessageContent onClose={() => setModalMessageActive(false)} />
			</Modal>
		</main>
	);
});

export default Transport;
