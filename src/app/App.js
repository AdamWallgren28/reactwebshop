// import logo from './logo.svg';
import './App.css';
import ProductCard from '../pages/productlist/productlist';
import Navbar from '../components/navbar/navbar';
import CheckOut from '../pages/checkout/checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About  from '../pages/about/about';
import Footer from '../components/footer/footer';
import Home from '../pages/home/home';
import ShopContextProvider from '../context/shopcontext';
import ProductPage from '../pages/productpage/productpage';
import ToggleCart from '../components/togglecart/togglecart';

export default function App() {
    return (
    <ShopContextProvider>
      <Router basename="/reactwebshop">
        <div className="App">
          <ToggleCart />
          <Navbar  />      
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productlist' element={<ProductCard />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/about' element={<About />} />  
            <Route path="/productpage/:productId" element={<ProductPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
}
