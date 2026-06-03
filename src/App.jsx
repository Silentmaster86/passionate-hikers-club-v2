import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import { AppLayout, MainContent } from '../src/styles/App.styles';

function App() {
	return (
		<AppLayout>
			<Navbar />
			<MainContent>
				<AppRoutes />
			</MainContent>
			<Footer />
		</AppLayout>
	);
}

export default App;