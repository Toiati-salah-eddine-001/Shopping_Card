
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Pannier from './Pannier';
function Routerlink() {
  return (
    <BrowserRouter>
<ul className="flex justify-center space-x-8 bg-white p-4 shadow-md rounded-lg">
  <li>
    <Link 
      to="/" 
      className="text-gray-800 font-medium hover:text-blue-600 transition duration-200"
    >
      Home
    </Link>
  </li>
  <li>
    <Link 
      to="/Pannier" 
      className="text-gray-800 font-medium hover:text-blue-600 transition duration-200"
    >
      Pannier
    </Link>
  </li>
</ul>

        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/Pannier' element={<Pannier/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routerlink