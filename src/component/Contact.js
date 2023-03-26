import { useFormik} from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import Alert from "react-bootstrap/Alert";
import Form from 'react-bootstrap/Form';
const validationSchema=Yup.object().shape(
  {
    fullname:Yup.string().required("Full name is required!"),
    email:Yup.string().email().required("email is required!"),
    message:Yup.string().required("message is required!"),
  }
)
function Contact() {
  const [successMsg,setSuccessMsg]=useState(false);
  const {handleChange,handleBlur,errors,values,handleSubmit,touched}=useFormik({
   initialValues:{
    fullname:'',
    email:'',
    message:''
   },
   validationSchema,
   onSubmit:(values)=>{
    setSuccessMsg(true);
   }
  });
  //console.log(touched);
  return (
    <>
      <div className="container">
      <h1 className='text-center my-5'>Contact</h1>
          <hr/>
        <div className="d-flex justify-content-center my-5">
          <div className="contact">
          
            <div className="other">
              <div className="info"></div>
            </div>
            <div className="form">
              <h1>Get In Touch</h1>
              {successMsg && (
              <Alert key={`success`} variant={`success`} dismissible className="w-100">Contact form has been sent !</Alert>)}
              <form onSubmit={handleSubmit}>
                <div className="flex-rev">
                {errors.fullname && touched.fullname && (<p className="error contact_error">{errors.fullname}</p>)}
                  <input
                    type="text"
                    placeholder="full name"
                    name="fullname"
                    id="fullname"
                    value={values.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="name">Full Name</label>
                </div>
                <div className="flex-rev">
                {errors.email && touched.email && (<p className="error contact_error">{errors.email}</p>)}
                  <input
                    type="email"
                    placeholder="abc@.com"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
                <div className="flex-rev">
                {errors.message && touched.message && (<p className="error contact_error">{errors.message}</p>)}
                  <textarea
                    placeholder="message"
                    name="message"
                    id="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="message">Email Message</label>
                </div>
                <button type="submit" className="btn btn-outline-dark">Send Email</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
