import { makeAutoObservable } from 'mobx';

export default class TransportStore {
	constructor() {
		this._transports = [
			{
				id: 1,
				route: 82,
				number: 'А123БВ',
				direction: 'ЖБИ - СТЦ Мега',
				current: 'ЖБИ',
				next: 'СТЦ Мега',
				type: 'bus',
				status: '5 мин',
				price: 30.0,
			},
			{
				id: 2,
				route: 82,
				number: 'А123БВ',
				direction: 'ЖБИ - СТЦ Мега',
				current: 'ЖБИ',
				next: 'СТЦ Мега',
				type: 'tram',
				status: 'прибывает',
				price: 30.0,
			},
			{
				id: 3,
				route: 82,
				number: 'А123БВ',
				direction: 'ЖБИ - СТЦ Мега',
				current: 'ЖБИ',
				next: 'СТЦ Мега',
				type: 'trolleybus',
				status: '4 мин',
				price: 29.0,
			},
		];
		makeAutoObservable(this);
	}

	setTransports(transports) {
		this._transports = transports;
	}

	get transports() {
		return this._transports;
	}
}
