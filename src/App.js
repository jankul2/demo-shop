import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Product from './component/Product';
import Cart from './component/Cart';
import Footer from './component/Footer';
import ErrorBoundary from './component/ErrorBoundary';
function App() {
  return (
    <>   
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ErrorBoundary><Products/></ErrorBoundary>} />
        <Route path="/products/:id" element={<ErrorBoundary><Product/></ErrorBoundary>} />
        <Route path="/about" element={<ErrorBoundary> <Products /></ErrorBoundary>} />
        <Route path="/contact" element={<ErrorBoundary><Products /></ErrorBoundary>} />
        <Route path="/cart" element={<ErrorBoundary><Cart/></ErrorBoundary>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
