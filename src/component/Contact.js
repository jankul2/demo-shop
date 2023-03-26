import React from "react";

function Contact() {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center my-5">
          <div className="contact">
            <div className="other">
              <div className="info"></div>
            </div>
            <div className="form">
              <h1>Get In Touch</h1>
              <form action="">
                <div className="flex-rev">
                  <input
                    type="text"
                    placeholder="Connor Gaunt"
                    name="name"
                    id="name"
                  />
                  <label htmlFor="name">Full Name</label>
                </div>
                <div className="flex-rev">
                  <input
                    type="email"
                    placeholder="connor@connorgaunt.com"
                    name="email"
                    id="email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
                <div className="flex-rev">
                  <textarea
                    placeholder="I have an idea for a project...."
                    name="message"
                    id="message"
                    defaultValue={""}
                  />
                  <label htmlFor="message">Email Message</label>
                </div>
                <button className="btn btn-outline-dark">Send Email</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
