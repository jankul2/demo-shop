import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector,connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { totalPrice } from '../services/helper';
import {isMobile} from 'react-device-detect';
import {setCoupan,removeCoupan,deletCartItem,updateQty} from '../redux/action'
function Cart(props) {
  const displatch = useDispatch();
  const coupanDetails = useSelector(state => state.handleCoupan);
  const [coupanCode,setCoupanCode]=useState();
  const cartDetails = useSelector(state => state.handleCart);
  const [total,setTotal]=useState(totalPrice(cartDetails));
  let appyCoupan=()=>{
    displatch(setCoupan({coupan:coupanCode,cost:0}))
    setCoupanCode(''); 
    //setTotal(totalPrice(cartDetails));
  }
  let removeCoupanCode=()=>{
    displatch(removeCoupan());
    
  }
const deleteCart=(product)=>{
    displatch(deletCartItem(product));
 }
  let handileCartUpdate=(product,qty)=>{
    //updatedQty
    displatch(updateQty(product,qty));
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
useEffect(()=>{
  setTotal(totalPrice(cartDetails));
},[coupanDetails,cartDetails])
  const BlanckCart = () => {
    return (
      <>
        <div className="container px-3 my-5 clearfix">
          {/* Shopping cart table */}
          <div className="card">
            <div className="card-header card-body text-center">
            <h6 className='fw-bold'>Shopping Cart</h6>
            </div>
            <div className="card-body text-center"></div>
            <h2 className='text-center mp-5 my-5'>Cart is empty!</h2>
          </div>
        </div>

      </>

    )

  }
  const CartInfo = () => {
    return (
      <>
        <div className="container px-3 my-5 clearfix">
          {/* Shopping cart table */}
          <div className="card">
            <div className="card-header text-center">
              <h6 className='fw-bold'>Shopping Cart</h6>
            </div>
            
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered m-0">
                  <thead>
                    <tr>
                      {/* Set columns width */}
                      <th className="text-center py-3 px-4" style={{ minWidth: '400px' }}>Product Name &amp; Details</th>
                      <th className="text-right py-3 px-4" style={{ width: '100px' }}>Price</th>
                      <th className="text-center py-3 px-4" style={{ width: '120px' }}>Quantity</th>
                      <th className="text-right py-3 px-4" style={{ width: '100px' }}>Total</th>
                      <th className="text-center align-middle py-3 px-0" style={{ width: '40px' }}><a href="/#" className="shop-tooltip float-none text-light" data-original-title="Clear cart"><i className="ino ion-md-trash" /></a></th>
                    </tr>
                  </thead>
                  <tbody>

                    {cartDetails.map(cart =>
                      <tr key={cart.id}>
                        <td className="ps-4">
                          <div className="media align-items-center d-flex flex-wrap ">
                            <img src={cart.image} className="d-block ui-w-40 ui-bordered mr-4" alt={cart.title} />
                            <div className="media-body p-4">
                              <NavLink to={`/products/${cart.id}`} className="d-block text-dark">{cart.title}</NavLink>
                      
                            </div>
                          </div>
                        </td>
                        <td className="text-right font-weight-semibold align-middle p-4"><i className="fa fa-inr" aria-hidden="true"></i>{cart.price}</td>
                        <td className="align-middle p-4"><input type="number"  className="form-control text-center" onChange={(e)=>handileCartUpdate(cart,e.target.value)} value={cart.qty} /></td>
                        <td className="text-right font-weight-semibold align-middle p-4"><i className="fa fa-inr" aria-hidden="true"></i>{(cart.price*cart.qty).toFixed(2)}</td>
                        <td className="text-center align-middle px-4"><button className="btn btn-danger  fa fa-close" onClick={()=>deleteCart(cart)} ></button></td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {/* / Shopping cart table */}
              <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">
                <div className="d-flex">
                <div className={`text-left ${isMobile?'':'me-5'} mt-4 coupan_sec`}>
                {coupanDetails.cost && <p>Coupan Code: <i className="fa fa-inr" aria-hidden="true"></i>{coupanDetails.cost}<button onClick={()=>removeCoupanCode()} className='ms-2 btn btn-danger  fa fa-close'></button></p>}
                  <input type="text" placeholder="coupan code" className="coupan py-2 border-1 rounded me-2"  value={coupanCode}  onChange={(e)=>setCoupanCode(e.target.value)} />
                  <button disabled ={coupanDetails.cost > 0}className='coupanBtn btn btn-outline-dark' onClick={()=>appyCoupan()}>Apply coupan</button>
                </div>
                </div>
                <div className="d-flex">
                 {coupanDetails.cost && (<div className="text-right mt-4 mr-5">
                    <label className="text-muted font-weight-normal me-5">Discount</label>
                    <div className="text-large"><strong><i className="fa fa-inr" aria-hidden="true"></i>{coupanDetails.cost}</strong></div>
                  </div>)}
                  <div className="text-right mt-4">
                    <label className="text-muted font-weight-normal m-0">Total price</label>
                    <div className="text-large"><strong><i className="fa fa-inr" aria-hidden="true"></i>{total}</strong></div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
          <div className="card my-5 py-5">
          <div className={`text-end ${isMobile?'text-center':'me-4'}`}>
                <NavLink className="btn btn-outline-dark me-3" to='/products'>Back to shopping</NavLink>
                <NavLink className="btn btn-outline-dark" to='/checkout'>Checkout</NavLink>
              </div>
        </div>
        </div>
     
      </>
    )
  }
  return (
    <>
      {cartDetails.length ? (<CartInfo />) : (<BlanckCart />)}
    </>
  )
}
const mapStateToProps = (state)=>{
  return{
      items: state.handleCart,
      //addedItems: state.addedItems
  }
}
/* const mapDispatchToProps = (dispatch)=>{
  return{
      removeItem: (id)=>{dispatch(removeItem(id))},
      addQuantity: (id)=>{dispatch(addQuantity(id))},
      subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
} */
//export default Cart
export default connect(mapStateToProps)(Cart);