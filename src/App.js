import logo from './logo.svg';
import './App.css';
import DiscountSlip from './Components/discountSlip/DiscountSlip';
import Navbar from './Components/navbar/Navbar';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Queries from './Components/queries/Queries';
import Footer from './Components/footer/Footer';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './context/DataProvider';
import Thanks from './Pages/Thanks';

function App() {
  const token = sessionStorage.getItem('accessToken');
  
  return (
    <DataProvider>
    <BrowserRouter>
    <div className="App">
      <DiscountSlip/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart token={token}/>}/>
        <Route path='/thank' element={<Thanks/>}/>
      </Routes>
      <Queries/>
      <Footer/>
    </div>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
