import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/Vendors';
import Details from './pages/Details';

function App() {

  return (
	<Router>
		<Routes>
			<Route path="/" element={<Login/>} />
        	<Route path="/home" element={<Home />} />
			<Route path="/search" element={<Search />} />
			<Route path="/CompanyDetails" element={<Details />} />
		</Routes>
	</Router>
  )
}

export default App
