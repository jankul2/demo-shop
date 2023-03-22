import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
<footer className="container-fluid bg_background py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="logo-part">
                    <h2>My Store</h2>
                    <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
                    <p>Use this tool as test data for an automated system or find your next pen</p>
                  </div>
                </div>
                <div className="col-md-6 px-4">
                  <h6> About Company</h6>
                  <p>But horizontal lines can only be a full pixel high.</p>
                  <a to="/contact" className="btn-footer my-2 mb-4"> Contact Us</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 px-4">
                  <h6> Help us</h6>
                  <div className="row ">
                    <div className="col-md-12">
                      <ul className='footer_menu'>
                        <li className='my-2'> <NavLink to="/"> Home</NavLink> </li>
                        <li className='my-2'> <NavLink to="/about"> About</NavLink> </li>
                        <li className='my-2'> <NavLink to="/service"> Service</NavLink> </li>
                        <li className='my-2'> <NavLink to="/team"> Team</NavLink> </li>
                        <li className='my-2'> <NavLink to="/help"> Help</NavLink> </li>
                        <li className='my-2'> <NavLink to="/contact"> Contact</NavLink> </li>
                      </ul>
                      
                    </div>
                    
                  </div>
                </div>
                <div className="col-md-6 ">
                  <h6> Newsletter</h6>
                 
                  <form className="form-footer my-3">
                    <input type="text" placeholder="search here...." name="search" />
                    <input type="button" defaultValue="Go" />
                  </form>
                  <p>That's technology limitation of LCD monitors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer