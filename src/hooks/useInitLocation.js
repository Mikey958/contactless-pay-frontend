import { useContext, useEffect } from 'react';
import { Context } from '../main.jsx';

export const useInitLocation = (onGranted) => {
	const { geolocation } = useContext(Context);
	useEffect(() => {
		if (geolocation.locationStatus !== 'unknown') return;

		const tg = window.Telegram?.WebApp;
		if (!tg?.LocationManager) return;

		tg.ready();

		tg.LocationManager.init(() => {
			if (!tg.LocationManager.isLocationAvailable) {
				geolocation.denyLocation();
				return;
			}

			tg.LocationManager.getLocation((location) => {
				if (location) {
					geolocation.setLocation(location);
					onGranted?.();
				} else {
					geolocation.denyLocation();
				}
			});
		});
	}, []);
};
