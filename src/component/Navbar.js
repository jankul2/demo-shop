import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import {deletCartItem } from '../redux/action';
function Navbar(props) {
    const miniCartData = useSelector((state => state.handleCart));
    console.log('miniCartData',miniCartData);
    const dispatch=useDispatch();
    const [cartShow, setCartShow] = useState(false);
    //console.log('checkStore', props.miniCartData);
    const miniCart = () => {
        let show = cartShow ? false : true;
        setCartShow((show))
    }
    const deleteCart=(product)=>{
        console.log('delete')
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
        <>
            <nav className="navbar navbar-expand-lg
                  navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">My Store</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>



                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className='btn btn-outline-dark'>
                                <i className="fa fa-sign-in me-1"></i>  Login
                            </NavLink>
                            <NavLink to="/register" className='btn btn-outline-dark ms-2'>
                                <i className="fa fa-user-plus me-1"></i>  Register
                            </NavLink>
                            <button onClick={() => miniCart()} className='btn btn-outline-dark ms-2'>
                                <i className="fa fa-shopping-cart me-1"></i>  Cart ({miniCartData.length})

                            </button>

                            {cartShow && <ul className="nav navbar-nav navbar-right mini_cart" >
                                <li className="dropdown">
                                    <ul className="dropdown-menu dropdown-cart" role="menu">
                                        {miniCartData.length? (<MiniCart/>):(<EmptyCart/>)}
                                    </ul>
                                </li>
                            </ul>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
/* function mapStateToProps(state) {
    return { miniCartData: state.handleCard }
  } */

//export default connect(mapStateToProps)(Navbar);
export default Navbar;