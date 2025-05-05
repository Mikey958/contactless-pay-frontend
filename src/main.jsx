import { createContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import UserStore from './store/UserStore.js';
import TransportStore from './store/TransportStore.js';
import HistoryStore from './store/HistoryStore.js';
import FavoriteStore from './store/FavoriteStore.js';
import MapStore from './store/MapStore.js';

export const Context = createContext(null);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Context.Provider
			value={{
				user: new UserStore(),
				transport: new TransportStore(),
				history: new HistoryStore(),
				favorite: new FavoriteStore(),
				map: new MapStore(),
			}}
		>
			<App />
		</Context.Provider>
	</StrictMode>
);
