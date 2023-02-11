import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector,connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { totalPrice } from '../services/helper';
import {setCoupan,removeCoupan} from '../redux/action'
function Cart(props) {
  const displatch = useDispatch();
  const coupanDetails = useSelector(state => state.handleCoupan);
  const [coupanCode,setCoupanCode]=useState();
  const cartDetails = useSelector(state => state.handleCart);
  const [total,setTotal]=useState(totalPrice(cartDetails));
  let appyCoupan=()=>{
    displatch(setCoupan({coupan:coupanCode,cost:0}))
    setCoupanCode(''); 
  }
  let removeCoupanCode=()=>{
    displatch(removeCoupan());
  }
  useEffect(()=>{
    setTotal(totalPrice(cartDetails));
  },[coupanDetails])

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
  const Cart = () => {
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
                        <td className="p-4">
                          <div className="media align-items-center d-flex flex-wrap ">
                            <img src={cart.image} className="d-block ui-w-40 ui-bordered mr-4" alt={cart.title} />
                            <div className="media-body p-4">
                              <NavLink to="/#" className="d-block text-dark">{cart.title}</NavLink>
                      
                            </div>
                          </div>
                        </td>
                        <td className="text-right font-weight-semibold align-middle p-4"><i className="fa fa-inr" aria-hidden="true"></i>{cart.price}</td>
                        <td className="align-middle p-4"><input type="text" className="form-control text-center" defaultValue={cart.qty} /></td>
                        <td className="text-right font-weight-semibold align-middle p-4"><i className="fa fa-inr" aria-hidden="true"></i>{cart.price*cart.qty}</td>
                        <td className="text-center align-middle px-4"><button className="btn btn-danger  fa fa-close"></button></td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {/* / Shopping cart table */}
              <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">
                <div className="d-flex">
                <div className="text-left mt-4 me-5">
                {coupanDetails.cost && <p>Coupan Code: <i className="fa fa-inr" aria-hidden="true"></i>{coupanDetails.cost}<button onClick={()=>removeCoupanCode()} className='ms-2 fa fa-close'></button></p>}
                  <input type="text" placeholder="coupan code" className="coupan py-2 border-1 rounded mr-2" autoFocus="autoFocus" value={coupanCode} onChange={(e)=>setCoupanCode(e.target.value)} />
                  <button disabled ={coupanDetails.cost > 0}className='btn btn-outline-dark me-2' onClick={()=>appyCoupan()}>Apply coupan</button>
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
              <div className="float-right">
                <button type="button" className="btn btn-outline-dark me-3">Back to shopping</button>
                <button type="button" className="btn btn-outline-dark">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      {cartDetails.length ? (<Cart />) : (<BlanckCart />)}
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