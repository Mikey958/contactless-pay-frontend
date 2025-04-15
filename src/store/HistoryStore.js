import { makeAutoObservable } from 'mobx';

export default class HistoryStore {
	constructor() {
		this._history = [
			{
				type: 'bus',
				id: 1,
				route: 82,
				number: 'А123БВ',
				direction: 'ЖБИ - СТЦ Мега',
				date: '09.04.2025',
				time: '02:26',
				price: 30.0,
			},
			{
				type: 'tram',
				id: 2,
				route: 82,
				number: 'А123БВ',
				direction: 'ЖБИ - СТЦ Мега',
				date: '09.04.2025',
				time: '02:26',
				price: 30.0,
			},
			{
				type: 'trolleybus',
				id: 3,
				route: 82,
				number: 'А123БВ',
				direction: 'ЖБИ - СТЦ Мега',
				date: '09.04.2025',
				time: '02:26',
				price: 29.0,
			},
		];
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

		this._history.push({
			...transport,
			date: formattedDate,
			time: formattedTime,
		});
	}

	clearHistory() {
		this._history = [];
	}

	get history() {
		return this._history;
	}
}
