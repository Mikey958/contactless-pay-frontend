import { makeAutoObservable } from 'mobx';

export default class FavoritesStore {
	constructor() {
		this._favorites = [
			{
				type: 'bus',
				id: 1,
				route: 12,
				direction: 'ЖБИ - СТЦ Мега',
				price: 30,
				alertCnt: 2,
				transports: [],
				nearTransports: [],
				notifications: Array(10)
					.fill(null)
					.map(() => this.createEmptyNotification()),
			},
			{
				type: 'tram',
				id: 2,
				route: 13,
				direction: 'ЖБИ - СТЦ Мега',
				price: 30,
				alertCnt: 0,
				transports: [],
				nearTransports: [],
				notifications: Array(10)
					.fill(null)
					.map(() => this.createEmptyNotification()),
			},
		];
		makeAutoObservable(this);
	}

	setFavorites(favorites) {
		this._favorites = favorites;
	}

	get favorites() {
		return this._favorites;
	}

	addFavorite(route) {
		this.favorites.push({
			...route,
			notifications: Array(10)
				.fill(null)
				.map(() => this.createEmptyNotification()),
		});
	}

	removeFavorite(routeId) {
		this.favorites = this.favorites.filter((fav) => fav.id !== routeId);
	}

	updateNotification(routeId, index, data) {
		const route = this.favorites.find((fav) => fav.id === routeId);
		if (route && route.notifications[index]) {
			route.notifications[index] = {
				...route.notifications[index],
				...data,
			};
		}
	}

	toggleNotification(routeId, index, enabled) {
		const route = this.favorites.find((fav) => fav.id === routeId);
		if (route && route.notifications[index]) {
			route.notifications[index].enabled = enabled;
		}
	}

	createEmptyNotification() {
		return {
			enabled: false,
		};
	}
}
