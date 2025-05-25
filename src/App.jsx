import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.jsx';
import { useTheme } from './hooks/useTheme.js';
import { ThemeContext } from './contexts/ThemeContext.js';

function App() {
	const { theme, setTheme } = useTheme();
	const tg = window.Telegram.WebApp;
	const user = tg.initDataUnsafe.user;
	console.log(user);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</ThemeContext.Provider>
	);
}

export default App;
