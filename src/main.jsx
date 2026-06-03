import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import App from './App';
import ScrollToTop from './components/other/ScrollToTop';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<LanguageProvider>
				<HelmetProvider>
					<GlobalStyles />
					<App />
				</HelmetProvider>
			</LanguageProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
