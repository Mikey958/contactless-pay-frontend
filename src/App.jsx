import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.jsx';
import { useTheme } from './hooks/useTheme.js';
import { ThemeContext } from './contexts/ThemeContext.js';

import { locationManager } from '@telegram-apps/sdk';

locationManager.isSupported();

function App() {
	const { theme, setTheme } = useTheme();

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</ThemeContext.Provider>
	);
}

export default App;
