import React from "react";
import Products from "./Products";
import Carousel from "react-bootstrap/Carousel";
function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 banner_img"
              src="../assets/bg.jpg"
              alt="Second slide"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container msite_content">
                <h5 className="card-title display-3 fw-bolder mb-0">
                  NEW SEESION ARRIVALS
                </h5>
                <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
              </div>
            </div>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
             className="d-block w-100 banner_img"
              src="../assets/banner2.png"
              alt="Second slide"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container msite_content">
                <h5 className="card-title display-3 fw-bolder mb-0">
                  Sales Morning
                </h5>
            
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <div className="card bg-dark text-white border-0">
                <img src="../assets/bg.jpg" className="card-img" alt="background" height="550px"/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEESION ARRIVALS</h5>
                        <p className="card-text lead fs-2">
                            CHECK OUT ALL THE TRENDS
                           </p>
                        </div>
                    </div>
            </div> */}
      <Products />
    </div>
  );
}

export default Home;
