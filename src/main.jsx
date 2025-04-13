import { createContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App.jsx';
import UserStore from './store/UserStore.js';
import TransportStore from './store/TransportStore.js';
import HistoryStore from './store/HistoryStore.js';

export const Context = createContext(null);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Context.Provider
			value={{
				user: new UserStore(),
				transport: new TransportStore(),
				history: new HistoryStore(),
			}}
		>
			<App />
		</Context.Provider>
	</StrictMode>
);
