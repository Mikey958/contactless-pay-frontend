import React, { useEffect, useRef, useState } from 'react';
import s from './RouteSelect.module.scss';
import arrowIcon from '../../assets/icons/filter-arrow-icon.svg';
import arrowLightIcon from '../../assets/icons/filter-arrow-light-icon.svg';
import { useThemeContext } from '../../contexts/ThemeContext.js';
import { clsx } from 'clsx';

const RouteSelect = ({ options = [], value, onSelect, placeholder = '' }) => {
	const { theme } = useThemeContext();

	const [isOpen, setIsOpen] = useState(false);
	const [inputValue, setInputValue] = useState(value?.route__number || '');
	const menuRef = useRef(null);

	useEffect(() => {
		setInputValue(value?.route_number || '');
	}, [value]);

	const handleInputFocus = (e) => {
		e.stopPropagation();
		setIsOpen(true);
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		if (!isOpen) setIsOpen(true);
	};

	const handleOptionClick = (opt) => {
		setInputValue(opt.route__number);
		onSelect(opt);
		setIsOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, []);

	return (
		<>
			<div className={s.select__search} onClick={(e) => e.stopPropagation()}>
				<input
					type='text'
					value={inputValue || ''}
					onFocus={handleInputFocus}
					onChange={handleInputChange}
					placeholder={placeholder}
					className={s.select__input}
				/>
				<img
					onClick={() => setIsOpen(!isOpen)}
					src={theme === 'light' ? arrowIcon : arrowLightIcon}
					alt='стрелка'
					className={clsx(s.select__arrow, isOpen && s.select__arrow_active)}
				/>
			</div>
			{isOpen && (
				<div className={s.select__menu} ref={menuRef}>
					{options
						.filter((opt) =>
							opt.route_number.toLowerCase().includes(inputValue.toLowerCase())
						)
						.map((option) => (
							<div
								key={option.route_id}
								className={clsx(
									s.select__option,
									value?.route_id === option.route_id && s.selected
								)}
								onMouseDown={() => handleOptionClick(option)}
							>
								<span className={s.select__route}>{option.route_number}</span>
								<span className={s.select__direction}>
									{option.route_title}
								</span>
							</div>
						))}
				</div>
			)}
		</>
	);
};

export default RouteSelect;
