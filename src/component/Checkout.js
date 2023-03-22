import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect, useDispatch } from "react-redux";
import { totalPrice } from "../services/helper";
import { useNavigate  } from "react-router-dom";
import {clearCart} from '../redux/action';
const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required!"),
  last_name: Yup.string().required("Last name is required!"),
  email: Yup.string().email().required("email is required!"),
  address: Yup.string().required("address is required!"),
  phone: Yup.string().max(10).min(10).required("phone is required!"),
  country: Yup.string().required("country is required!"),
  state: Yup.string().required("state is required!"),
  zipcode: Yup.string().required("state is required!"),
/*   cash_on_delivery: Yup.string().required("Payment option is required!"), */
});
function Checkout(props) {
  let navigate = useNavigate();
  const dispatch=useDispatch();
  const { handleChange, handleBlur, errors, values, handleSubmit, touched } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        phone: "",
        country: "",
        state: "",
        city: "",
        zipcode: "",
        cash_on_delivery: "",
      },
      validationSchema,
      onSubmit: (values) => {
        dispatch(clearCart())
        navigate("/thank-you");
      },
    });
     //dispatch(clearCart())
  let CartInfo = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return <></>;
  };
  const BlanckCheckout = () => {
    return (
      <>
        <div className="container px-3 my-5 clearfix">
          {/* Shopping cart table */}
          <div className="card">
            <div className="card-header card-body text-center">
              <h6 className="fw-bold">Checkout</h6>
            </div>
            <div className="card-body text-center"></div>
            <h2 className="text-center mp-5 my-5">Checkout is empty!</h2>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container px-3 my-5 clearfix checkout">
        <div className="row">
          {props.cartInfo.length ? (
            <div className="checkout_sec row">
              <div className="col-md-5 order-md-2 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Your cart</span>
                  <span className="badge badge-secondary badge-pill">3</span>
                </h4>
                <ul className="list-group mb-3 sticky-top">
                  {props.cartInfo.map((cart) => (
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 className="my-0">{`${cart.title} x ${cart.qty}`}</h6>
                      </div>
                      <span className="text-muted">
                        <i className="fa fa-inr" aria-hidden="true"></i>
                        {(cart.price * cart.qty).toFixed(2)}
                      </span>
                    </li>
                  ))}

                  {props?.coupanInfo?.cost && (
                    <li className="list-group-item d-flex justify-content-between bg-light">
                      <div className="text-success">
                        <h6 className="my-0">Promo code</h6>
                        <small>{props.coupanInfo.coupan}</small>
                      </div>
                      <span className="text-success">
                        {" "}
                        -<i className="fa fa-inr" aria-hidden="true"></i>
                        {props.coupanInfo.cost}
                      </span>
                    </li>
                  )}
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (Rupes)</span>
                    <strong>
                      <i className="fa fa-inr" aria-hidden="true"></i>
                      {totalPrice(props.cartInfo)}
                    </strong>
                  </li>
                </ul>
              </div>
              <div className="col-md-7 order-md-1">
                <h4 className="mb-3">Billing address</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="first_name">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="first_name"
                        name="first_name"
                        id="first_name"
                        value={values.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.first_name && touched.first_name && (
                        <p className="error contact_error">
                          {errors.first_name}
                        </p>
                      )}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastName">Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="last_name"
                        placeholder="Last name"
                        value={values.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.last_name && touched.last_name && (
                        <p className="error contact_error">
                          {errors.last_name}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email">
                        Email <span className="text-muted"></span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="xxxx@example.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.email && touched.email && (
                        <p className="error contact_error">{errors.email}</p>
                      )}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email">
                        Phone <span className="text-muted"></span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="xxxxxxxxx"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.phone && touched.phone && (
                        <p className="error contact_error">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                      {errors.address && touched.address && (
                        <p className="error contact_error">{errors.address}</p>
                      )}
                    </div>
                    <div className="invalid-feedback"></div>
                  </div>

                  <div className="row">
                    <div className="col-md-5 mb-3">
                      <label htmlFor="country">Country</label>
                      <select
                        className="custom-select  form-control d-block w-100"
                        id="country"
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">Choose...</option>
                        <option value={`in`}>India</option>
                        <option value={`us`}>United States</option>
                      </select>

                      {errors.country && touched.country && (
                        <p className="error contact_error">{errors.country}</p>
                      )}
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="state">State</label>
                      <select
                        className=" form-control custom-select d-block w-100"
                        id="state"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">Choose...</option>
                        <option>California</option>
                      </select>
                      {errors.state && touched.state && (
                        <p className="error contact_error">{errors.state}</p>
                      )}
                    </div>
                    <div className="col-md-3 mb-3">
                      <label htmlFor="zip">Zip code</label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        placeholder=""
                        name="zipcode"
                        value={values.zipcode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.zipcode && touched.zipcode && (
                        <p className="error contact_error">{errors.zipcode}</p>
                      )}
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
                        value={values.cash_on_delivery}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cash_on_delivery"
                      >
                        Cash on delivery
                      </label>
                    </div>
                  </div>

                  <hr className="mb-4" />
                  <div className="text-end">
                    <button type="submit" className="btn btn-outline-dark">
                      Place order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <BlanckCheckout />
          )}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cartInfo: state.handleCart,
    coupanInfo: state.handleCoupan,
  };
};
export default connect(mapStateToProps)(Checkout);
