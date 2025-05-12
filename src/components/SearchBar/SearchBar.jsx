import React, { useEffect, useState } from 'react';
import s from './SearchBar.module.scss';
import searchIcon from '../../assets/icons/search-icon.svg';

const SearchBar = ({ placeholder, onSearch, initialValue = '' }) => {
	const [query, setQuery] = useState(initialValue);

	useEffect(() => {
		setQuery(initialValue);
	}, [initialValue]);

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(query);
	};

	return (
		<form onSubmit={handleSubmit} className={s.searchForm}>
			<button type='submit' className={s.searchForm__button}>
				<img
					className={s.searchForm__img}
					src={searchIcon ? searchIcon : undefined}
					alt='Поиск'
				/>
			</button>
			<input
				type='text'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder={placeholder}
				className={s.searchForm__input}
			/>
		</form>
	);
};

export default SearchBar;
