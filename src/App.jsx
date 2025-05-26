import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.jsx';
import { useTheme } from './hooks/useTheme.js';
import { ThemeContext } from './contexts/ThemeContext.js';
import { useEffect } from 'react';

function App() {
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		// Убедимся, что Telegram WebApp готов
		if (!window.Telegram?.WebApp) {
			alert('Telegram WebApp не найден');
			return;
		}

		const tg = window.Telegram.WebApp;

		tg.ready();

		// Инициализация LocationManager
		tg.LocationManager.init(() => {
			const isAvailable = tg.LocationManager.isLocationAvailable;

			tg.showAlert(
				isAvailable
					? 'Геолокация доступна на этом устройстве ✅'
					: 'Геолокация недоступна на этом устройстве ❌'
			);
		});
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</ThemeContext.Provider>
	);
}

export default App;
