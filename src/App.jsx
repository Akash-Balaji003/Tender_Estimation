import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/Vendors';


function App() {

  return (
	<Router>
		<Routes>
			<Route path="/" element={<Login/>} />
        	<Route path="/home" element={<Home />} />
			<Route path="/search" element={<Search />} />
		</Routes>
	</Router>
  )
}

export default App
