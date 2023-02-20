import React from "react";
import { connect } from "react-redux";
import { totalPrice } from "../services/helper";
function Checkout(props) {
  console.log('checkput',Object.keys(props.coupanInfo));
  let CartInfo=()=>{
    return (
      <>
      <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3 sticky-top">
              {props.cartInfo.map(cart=>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">{`${cart.title} x ${cart.qty}`}</h6>
                </div>
                <span className="text-muted"><i className="fa fa-inr" aria-hidden="true"></i>{(cart.price*cart.qty).toFixed(2)}</span>
              </li>
              )}
           
             {props?.coupanInfo?.cost && <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>{props.coupanInfo.coupan}</small>
                </div>
                <span className="text-success"> -<i className="fa fa-inr" aria-hidden="true"></i>{props.coupanInfo.cost}</span>
              </li>
             }
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (Rupes)</span>
                <strong><i className="fa fa-inr" aria-hidden="true"></i>${totalPrice(props.cartInfo)}</strong>
              </li>
            </ul>
        
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate="">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    defaultValue=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    {" "}
                    Valid first name is required.{" "}
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    defaultValue=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    {" "}
                    Valid last name is required.{" "}
                  </div>
                </div>
              </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="email">
                  Email <span className="text-muted"></span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  {" "}
                  Please enter a valid email address for shipping updates.{" "}
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email">
                  Phone <span className="text-muted"></span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="xxxxxxxxx"
                />
                <div className="invalid-feedback">
                  {" "}
                  Please enter a valid email address for shipping updates.{" "}
                </div>
              </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  
</div>
                <div className="invalid-feedback">
                  {" "}
                  Please enter your shipping address.{" "}
                </div>
              </div>
             
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select
                    className="custom-select  form-control d-block w-100"
                    id="country"
                    required=""
                  >
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    {" "}
                    Please select a valid country.{" "}
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select
                    className=" form-control custom-select d-block w-100"
                    id="state"
                    required=""
                  >
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    {" "}
                    Please provide a valid state.{" "}
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback"> Zip code required. </div>
                </div>
              </div>
              <hr className="mb-4" />
              <h4 className="mb-3">Payment</h4>
                <div className="d-block my-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="cash_on_delivery"
                    id="cash_on_delivery"
                    defaultChecked={`checked`}
                  />
                  <label className="form-check-label" htmlFor="cash_on_delivery">
                    Cash on delivery
                  </label>
                </div>
              </div>
              
             
             
              <hr className="mb-4" />
              <div className="text-end">
              <button className="btn btn-outline-dark">Place order</button>
              </div>
           
            </form>
          </div>
      </>
    )
  }
  const BlanckCheckout = () => {
    return (
      <>
        <div className="container px-3 my-5 clearfix">
          {/* Shopping cart table */}
          <div className="card">
            <div className="card-header card-body text-center">
            <h6 className='fw-bold'>Checkout</h6>
            </div>
            <div className="card-body text-center"></div>
            <h2 className='text-center mp-5 my-5'>Checkout is empty!</h2>
          </div>
        </div>

      </>

    )

  }
  return (
    <div>
      <div className="container px-3 my-5 clearfix checkout">
        <div className="row">
          {props.cartInfo.length? <CartInfo/>:<BlanckCheckout/>}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state)=>{
  return{
      cartInfo: state.handleCart,
      coupanInfo: state.handleCoupan,
  }
}
export default connect(mapStateToProps)(Checkout);