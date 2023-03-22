import './App.css';
import Home from './component/Home';
import Products from './component/Products';
import {
  Routes,
  Route,
} from "react-router-dom";
import Product from './component/Product';
import Cart from './component/Cart';
import Footer from './component/Footer';
import ErrorBoundary from './component/ErrorBoundary';
import Checkout from './component/Checkout';
import About from './component/About';
import Contact from './component/Contact';
import Menu from './component/header/Menu';
import Blog from './component/Blog';
import Login from './component/Login';
import ThankYou from './component/ThankYou';
function App() {
  return (
    <> 
    <Menu/>  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ErrorBoundary><Products/></ErrorBoundary>} />
        <Route path="/products/:id" element={<ErrorBoundary><Product/></ErrorBoundary>} />
        <Route path="/about" element={<ErrorBoundary> <About /></ErrorBoundary>} />
        <Route path="/contact" element={<ErrorBoundary><Contact/></ErrorBoundary>} />
          
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/blog" element={<ErrorBoundary><Blog/></ErrorBoundary>} />
        <Route path="/blog/:slug" element={<ErrorBoundary><Checkout/></ErrorBoundary>} />
        <Route path="/login" element={<ErrorBoundary><Login/></ErrorBoundary>} />
        <Route path="/thank-you" element={<ErrorBoundary><ThankYou/></ErrorBoundary>} />
        <Route path="/cart" element={<ErrorBoundary><Cart/></ErrorBoundary>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
