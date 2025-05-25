import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.jsx';
import { useTheme } from './hooks/useTheme.js';
import { ThemeContext } from './contexts/ThemeContext.js';

function App() {
	const { theme, setTheme } = useTheme();
	useEffect(() => {
		if (window.Telegram && window.Telegram.WebApp) {
			const tg = window.Telegram.WebApp;
			tg.ready();
			const user = tg.initDataUnsafe.user;
			console.log(user);
		} else {
			console.log('Запущено вне Telegram WebApp');
		}
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
