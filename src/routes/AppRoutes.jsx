import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Poland from '../pages/Poland';
import England from '../pages/England';
import Slovakia from '../pages/Slovakia';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/poland' element={<Poland />} />
			<Route path='/england' element={<England />} />
			<Route path='/slovakia' element={<Slovakia />} />
			<Route path='/about' element={<About />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
