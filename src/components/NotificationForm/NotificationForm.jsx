import React, { useState } from 'react';
import s from './NotificationForm.module.scss';
import './Select.scss';
import alertIcon from '../../assets/icons/alert-blue-icon.svg';
import basketIcon from '../../assets/icons/basket-red-icon.svg';
import SwitchToggle from '../SwitchToggle/SwitchToggle.jsx';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { getSelectValue, handleSelectChange } from '../../utils/selectUtils';

const animatedComponents = makeAnimated();

const NotificationForm = ({ data, onSave, index }) => {
	const [enabled, setEnabled] = useState(false);
	const [stopName, setStopName] = useState(null);
	const [activeDays, setActiveDays] = useState(null);
	const [startTime, setStartTime] = useState('');
	const [endTime, setEndTime] = useState('');
	const [interval, setInterval] = useState(null);

	const options = [
		{ value: 'ЖБИ', label: 'ЖБИ' },
		{ value: 'СТЦ Мега', label: 'СТЦ Мега' },
		{ value: 'Уралмаш', label: 'Уралмаш' },
		{ value: 'sdads', label: 'sdads' },
		{ value: 'adadsad', label: 'adadsad' },
		{ value: 'Урdsda', label: 'Урdsda' },
		{ value: 'Ураdsad', label: 'Ураdsad' },
	];
	const days = [
		{ value: 'Понедельник', label: 'ПН' },
		{ value: 'Вторник', label: 'ВТ' },
		{ value: 'Среда', label: 'СР' },
		{ value: 'Четверг', label: 'ЧТ' },
		{ value: 'Пятница', label: 'ПТ' },
		{ value: 'Суббота', label: 'СБ' },
		{ value: 'Воскресенье', label: 'ВС' },
	];
	const intervals = [
		{ value: 5, label: '5 мин' },
		{ value: 10, label: '10 мин' },
		{ value: 15, label: '15 мин' },
		{ value: 20, label: '20 мин' },
	];

	return (
		<form onSubmit={onSave} className={s.form}>
			<div className={`${s.form__header} ${enabled ? s.form__header_on : ''}`}>
				<div className={s.form__title}>
					<img src={alertIcon} alt='Колокол' />
					<h2 className={s.form__text}>Уведомления</h2>
				</div>
				<SwitchToggle enabled={enabled} onChange={setEnabled} />
			</div>

			{enabled && (
				<>
					<div className={s.form__main}>
						<fieldset className={s.form__fieldset}>
							<p className={s['form__subtitle-gray']}>Желаемая остановка</p>
							<Select
								placeholder='Введите название остановки'
								value={getSelectValue(stopName, options, false)}
								onChange={(value) =>
									handleSelectChange(value, setStopName, false)
								}
								options={options}
								isClearable={true}
								className='select'
								components={animatedComponents}
								classNamePrefix='select'
								noOptionsMessage={() => 'Остановка не найдена'}
							/>
						</fieldset>

						<fieldset className={s.form__fieldset}>
							<p className={s.form__subtitle}>Активные дни</p>
							<Select
								placeholder='Выберите активные дни'
								value={getSelectValue(activeDays, days, true)}
								onChange={(value) =>
									handleSelectChange(value, setActiveDays, true)
								}
								options={days}
								className='select'
								components={animatedComponents}
								classNamePrefix='select'
								isMulti={true}
								isClearable={true}
								noOptionsMessage={() => 'День не найден'}
								isSearchable={false}
								closeMenuOnSelect={false}
								blurInputOnSelect={false}
							/>
						</fieldset>

						<fieldset className={s.form__fieldset}>
							<p className={s.form__subtitle}>Временной промежуток</p>
							<div className={s.form__container}>
								<div className={s.form__wrapper}>
									<p className={s['form__subtitle-gray']}>Начало</p>
									<input
										className={s.form__time}
										type='text'
										placeholder='8:00'
										value={startTime}
										onChange={(e) => setStartTime(e.target.value)}
									/>
								</div>
								<div className={s.form__wrapper}>
									<p className={s['form__subtitle-gray']}>Конец</p>
									<input
										className={s.form__time}
										type='text'
										placeholder='18:00'
										value={endTime}
										onChange={(e) => setEndTime(e.target.value)}
									/>
								</div>
							</div>
						</fieldset>

						<fieldset className={s.form__fieldset}>
							<p className={s.form__subtitle}>Интервал уведомлений</p>
							<Select
								placeholder='Выберите интервал'
								value={getSelectValue(interval, options, false)}
								onChange={(value) =>
									handleSelectChange(value, setInterval, false)
								}
								options={intervals}
								isClearable={true}
								className='select'
								components={animatedComponents}
								classNamePrefix='select'
								noOptionsMessage={() => 'Интервал не найден'}
							/>
						</fieldset>
					</div>
					<div className={s.form__buttons}>
						<button type='submit' className={s.form__submit}>
							Сохранить изменения
						</button>
						<button className={s.form__delete}>
							<img src={basketIcon} alt='Корзина' />
							<p className={s['form__delete-text']}>Удалить из избранного</p>
						</button>
					</div>
				</>
			)}
		</form>
	);
};

export default NotificationForm;
