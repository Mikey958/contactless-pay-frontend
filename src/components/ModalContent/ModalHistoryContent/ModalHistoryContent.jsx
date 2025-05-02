import React, { useContext } from 'react';
import s from './ModalHistoryContent.module.scss';
import { Context } from '../../../main.jsx';
import { observer } from 'mobx-react-lite';
import warningIcon from '../../../assets/icons/warning-icon.svg';

const ModalHistoryContent = observer(({ onClose }) => {
	const { history } = useContext(Context);

	const handleAction = () => {
		history.clearHistory();
		onClose();
	};

	return (
		<div className={s.content}>
			<img className={s.content__warning} src={warningIcon} alt='Осторожно' />
			<p className={s.content__title}>Вы уверены?</p>
			<p className={s.content__description}>{`История ваших поездок будет
			безвозвратно удалена.
			Восстановление невозможно.`}</p>
			<div className={s.content__buttons}>
				<button
					className={`${s.content__button} ${s.content__cancel}`}
					onClick={onClose}
				>
					Отмена
				</button>
				<button
					className={`${s.content__button} ${s.content__delete}`}
					onClick={handleAction}
				>
					Удалить
				</button>
			</div>
		</div>
	);
});

export default ModalHistoryContent;
