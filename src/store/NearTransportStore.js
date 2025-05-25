import { makeAutoObservable } from 'mobx';

export default class NearTransportStore {
	constructor() {
		this._nearTransports = [
			{
				transport_uuid: '1',
				transport_type: 'bus',
				route_number: '82',
				state_number: '123АБВ',
				route_title: 'ЖБИ - СТЦ Мега',
				route_id: 1,
				current_stop: 'ЖБИ',
				next_stop: 'СТЦ Мега',
				is_favourite: true,
				price: 30,
				arrival_time: 5,
			},
			{
				transport_uuid: '2',
				transport_type: 'trolleybus',
				route_number: '82',
				state_number: '123АБВ',
				route_title: 'ЖБИ - СТЦ Мега',
				route_id: 1,
				current_stop: 'ЖБИ',
				next_stop: 'СТЦ Мега',
				is_favourite: false,
				price: 30,
				arrival_time: 0,
			},
			{
				transport_uuid: '3',
				transport_type: 'tram',
				route_number: '82',
				state_number: '123АБВ',
				route_title: 'ЖБИ - СТЦ Мега',
				route_id: 1,
				current_stop: 'ЖБИ',
				next_stop: 'СТЦ Мега',
				is_favourite: true,
				price: 30,
				arrival_time: 2,
			},
		];
		makeAutoObservable(this);
	}

	toggleFavourite(id) {
		const item = this._nearTransports.find((t) => t.transport_uuid === id);
		if (item) {
			item.is_favourite = !item.is_favourite;
		}
	}

	setNearTransports(transports) {
		this._nearTransports = transports;
	}

	get nearTransports() {
		return this._nearTransports;
	}
}
