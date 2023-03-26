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
import Checkout from './component/Checkout';
import About from './component/About';
import Contact from './component/Contact';
function App() {
  return (
    <>   
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ErrorBoundary><Products/></ErrorBoundary>} />
        <Route path="/products/:id" element={<ErrorBoundary><Product/></ErrorBoundary>} />
        <Route path="/about" element={<ErrorBoundary> <About /></ErrorBoundary>} />
        <Route path="/contact" element={<ErrorBoundary><Contact/></ErrorBoundary>} />
        <Route path="/cart" element={<ErrorBoundary><Cart/></ErrorBoundary>} />
        <Route path="/checkout" element={<ErrorBoundary><Checkout/></ErrorBoundary>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
