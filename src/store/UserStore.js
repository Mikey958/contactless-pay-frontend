import { makeAutoObservable } from 'mobx';

export default class UserStore {
	constructor() {
		this._isAuth = true;
		this._user = {
			user_id: null,
			city_name: null,
			chat_id: null,
		};
		this._cities = [
			{
				id: 1,
				name: 'Москва',
			},
			{
				id: 2,
				name: 'Санкт-Петербург',
			},
			{
				id: 3,
				name: 'Казань',
			},
			{
				id: 4,
				name: 'Екатеринбург',
			},
			{
				id: 5,
				name: 'Новосибирск',
			},
			{
				id: 6,
				name: 'Уфа',
			},
			{
				id: 7,
				name: 'Челябинск',
			},
			{
				id: 8,
				name: 'Красноярск',
			},
			{
				id: 9,
				name: 'Самара',
			},
			{
				id: 10,
				name: 'Нижний Новгород',
			},
		];
		makeAutoObservable(this);
	}

	setIsAuth(bool) {
		this._isAuth = bool;
	}

	setUser(user) {
		this._user = user;
	}

	setCities(cities) {
		this._cities = cities;
	}

	get isAuth() {
		return this._isAuth;
	}

	get user() {
		return this._user;
	}

	get cities() {
		return this._cities;
	}
}
