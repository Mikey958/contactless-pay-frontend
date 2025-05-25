import { makeAutoObservable } from 'mobx';

export default class HistoryStore {
	constructor() {
		const storedHistory = localStorage.getItem('transport_history');

		this._history = storedHistory ? JSON.parse(storedHistory) : [];
		makeAutoObservable(this);
	}

	addToHistory(transport) {
		const now = new Date();

		const formattedDate = now.toLocaleDateString('ru-RU', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		});

		const formattedTime = now.toLocaleTimeString('ru-RU', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		});

		const newItem = {
			id: Date.now(),
			...transport,
			date: formattedDate,
			time: formattedTime,
		};

		this._history.push(newItem);

		localStorage.setItem('transport_history', JSON.stringify(this._history));
	}

	clearHistory() {
		this._history = [];
		localStorage.removeItem('transport_history');
	}

	get history() {
		return this._history;
	}
}
