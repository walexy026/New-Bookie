import { Route, Routes } from 'react-router-dom';
import BooksPage from './BooksPage';
import Buybooks from './buy-books/Buybooks';
import Landingpage from './Landingpage';
import Savemoneypage from './savemoneypage/Savemoneypage';

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Landingpage />}
				/>
				<Route
					exact
					path='allbooks'
					element={<BooksPage />}
				/>

				<Route
					exact
					path='savemoney'
					element={<Savemoneypage />}
				/>
				<Route
					exact
					path='buybooks'
					element={<Buybooks />}
				/>
			</Routes>
		</>
	);
}

export default App;
