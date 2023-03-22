import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';  
import { NavLink,useNavigate} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import {deletCartItem } from '../../redux/action';
import {isMobile} from 'react-device-detect';

function Menu() {
  const navigate = useNavigate();
  const miniCartData = useSelector((state => state.handleCart));
    //console.log('miniCartData',miniCartData);
  const dispatch=useDispatch();
    const [cartShow, setCartShow] = useState(false);
    //console.log('checkStore', props.miniCartData);
    const miniCart = () => {
        let show = cartShow ? false : true;
        setCartShow((show))
    }
    const deleteCart=(product)=>{
       dispatch(deletCartItem(product));
    }
    useEffect(()=>{

    },[miniCartData.length])
    let MiniCart = () => {
      return (
          <>
          {miniCartData.map(cartItem=>(
              <li key={cartItem.id}>
                  <span className="item">
                      <span className="item-left">
                          <img src={cartItem.image} alt={cartItem.title}/>
                          <span className="item-info">
                              <span>{cartItem.title.substring(0,12)}...</span>
                              <span>Qty: {cartItem.qty}</span>
                              <span>Price:  <i className="fa fa-inr" aria-hidden="true"></i>{cartItem.price}</span>
                          </span>
                      </span>
                      <span className="item-right">
                          <button className="btn btn-danger  fa fa-close" onClick={()=>deleteCart(cartItem)} />
                      </span>
                  </span>
              </li>
               ))}
              <li className="divider"></li>
              <li className='cartlist'><NavLink to="/cart" className="text-center go_cart btn btn-outline-dark">View Cart</NavLink></li>

          </>)
  }
let EmptyCart=()=>{
  return (
      <>
      <li className='cart_empty'>Cart is Empty!</li>
      </>
  )
}
  return (
    <Navbar bg="light" className='menu bg-white shadow-sm' expand="lg" collapseOnSelect >
      <Container>
      <Nav.Link as={NavLink}  to="/" className='logo'>
        <Navbar.Brand className='fw-bold fs-4'><img className='logo' src='../assets/logo.png'/></Navbar.Brand></Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto mb-2 mt-4 mb-lg-0">
            <div className='nav-item'>
            <Nav.Link  as={NavLink} eventKey="1" to="/">Home</Nav.Link>
            </div>
            <div className='nav-item'>
            <Nav.Link as={NavLink} eventKey="2" to="/products">Product</Nav.Link>
            </div>
            <div className='nav-item'>
            <Nav.Link as={NavLink} eventKey="3" to="/blog">Blog</Nav.Link>
            </div>
            <div className='nav-item'>
            <Nav.Link as={NavLink} eventKey="4" to="/about">About</Nav.Link>
            </div>
            <div className='nav-item'>
            <Nav.Link as={NavLink} eventKey="5" to="/contact">Contact</Nav.Link>
            </div>
            <div className='myaccount'>
            <Nav.Link as={NavLink} eventKey="6" to="/login"><i className="fa fa-user-plus me-1"></i></Nav.Link>
            </div>
            <div className='cart-item'>
            <Nav.Link eventKey="7"><i className="fa fa-shopping-cart me-1"  onClick={() => isMobile? navigate("/cart"):miniCart()}></i></Nav.Link>
            <span className='badge badge-warning' id='lblCartCount'>{miniCartData.length}</span>
            {cartShow && isMobile===false && <ul className="dropdown-menu dropdown-cart" role="menu">
                                        {miniCartData.length? (<MiniCart/>):(<EmptyCart/>)}
                                    </ul>
                            } 
            </div>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Menu;