import group from "../images/group.png";
import "./contact.css";

import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contactParent">
      <div className="container contactParent2">
        <h1 style={{ marginBottom: "1em", textAlign: "center" }}>Contact Us</h1>
        <div className="row justify-content-around">
          <div className="contactChild1 col-sm-8 col-md-6">
            <h2>Got a project? Get in touch with us now!</h2>
            <form action="" className=" my-4 form-goup">
              <div className="row">
                <select
                  id="country"
                  name="country"
                  className="col form-control"
                >
                  <option value="" disabled selected hidden>
                    Select Reasons for contacting us
                  </option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
              <div className="row">
                <input
                  className="col form-control"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  className="col form-control"
                  type="email"
                  placeholder="email"
                />
              </div>
              <div className="row">
                <input
                  className="col form-control"
                  type="number"
                  placeholder="Enter Phone Number"
                />
                <select
                  className="col form-control"
                  id="country"
                  name="country"
                  placeholder="Select job category"
                >
                  <option value="" disabled selected hidden>
                    Select job category
                  </option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
              <div className="row">
                <textarea
                  className="col form-control"
                  type="text"
                  placeholder="Enter your message here describing your job"
                />
              </div>
              <div className="row">
                <input
                  type="submit"
                  value="Get in Touch"
                  className="btn btn-primary "
                />
              </div>
              <p>
                Looking for an internship opportunity?{" "}
                <a href="#">Click Here</a> to register
              </p>
            </form>
          </div>
          <div className="contactChild2 col-sm-8 col-md-6">
            <img
              src={group}
              alt=""
              className="img-fluid"
              style={{ width: "90%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
