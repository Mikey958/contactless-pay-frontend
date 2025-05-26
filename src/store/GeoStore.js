import { makeAutoObservable } from 'mobx';

const STORAGE_KEY = 'locationStatus';

export default class GeoStore {
	_locationStatus = 'unknown';
	_location = null;

	constructor() {
		makeAutoObservable(this);
		this.loadFromStorage();
	}

	get locationStatus() {
		return this._locationStatus;
	}

	get location() {
		return this._location;
	}

	setLocation(location) {
		this._locationStatus = 'granted';
		this._location = location;
		this.saveToStorage();
	}

	denyLocation() {
		this._locationStatus = 'denied';
		this._location = null;
		this.saveToStorage();
	}

	reset() {
		this._locationStatus = 'unknown';
		this._location = null;
		this.saveToStorage();
	}

	saveToStorage() {
		localStorage.setItem(STORAGE_KEY, this._locationStatus);
	}

	loadFromStorage() {
		const status = localStorage.getItem(STORAGE_KEY);
		if (['granted', 'denied'].includes(status)) {
			this._locationStatus = status;
		} else {
			this._locationStatus = 'unknown';
		}
	}
}
