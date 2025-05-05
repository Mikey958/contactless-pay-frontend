import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../main.jsx';
import { observer } from 'mobx-react-lite';
import s from './Transport.module.scss';
import getImageSrc from '../../utils/getImageSrc.js';
import likeIcon from '../../assets/icons/like-button.svg';
import Modal from '../../components/Modal/Modal.jsx';
import ModalHistoryContent from '../../components/ModalContent/ModalHistoryContent/ModalHistoryContent.jsx';
import ModalQrContent from '../../components/ModalContent/ModalQrContent/ModalQrContent.jsx';
import ModalLinksContent from '../../components/ModalContent/ModalLinksContent/ModalLinksContent.jsx';
import ModalQuestionContent from '../../components/ModalContent/ModalQuestionContent/ModalQuestionContent.jsx';
import ModalMessageContent from '../../components/ModalContent/ModalMessageContent/ModalMessageContent.jsx';

const Transport = observer(() => {
	const { number: numberRoute } = useParams();
	const { transport } = useContext(Context);

	const obj = transport.transports.find(
		(r) => String(r.number) === numberRoute
	);

	const [modalQrActive, setModalQrActive] = useState(false);
	const [modalLinksActive, setModalLinksActive] = useState(false);
	const [modalQuestionActive, setModalQuestionActive] = useState(false);
	const [modalMessageActive, setModalMessageActive] = useState(false);

	const handleClick = () => {
		window.open('https://istudent.urfu.ru', '_blank');
		setModalQuestionActive(true);
	};

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
			<button className={s.transport__pay} onClick={handleClick}>
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
				<ModalQrContent onClose={() => setModalQrActive(false)} />
			</Modal>
			<Modal active={modalLinksActive} setActive={setModalLinksActive}>
				<ModalLinksContent
					onClose={() => setModalLinksActive(false)}
					open={() => setModalQuestionActive(true)}
				/>
			</Modal>
			<Modal active={modalQuestionActive} setActive={setModalQuestionActive}>
				<ModalQuestionContent
					obj={obj}
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
