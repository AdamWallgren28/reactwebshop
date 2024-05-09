// import logo from './logo.svg';
import './App.css';
import ProductCard from '../pages/productlist/productlist';
import Navbar from '../components/navbar/navbar';



function App() {
  return (
    <div className="App">
      <Navbar /> 
      <div className="text-center">
        <ProductCard />
      </div>  
    </div>
  );
}

export default App;
