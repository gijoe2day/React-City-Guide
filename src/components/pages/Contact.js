import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Contact extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>
          <div className="row">
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1kKKG7Og-8MZRS-rwjm2o8TuYOIlYR0V1"
                style={{
                  border: "0",
                  width: "100%",
                  height: "315px",
                  frameborder: "0,",
                }}
                allowFullScreen
              ></iframe>
            </div>

            <div className="col-md-5">
              <h3>
                <strong>Contact Us</strong>
              </h3>
              <form>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="Tel"
                    placeholder="Phone"
                  />
                </div>
                <textarea
                  cols="30"
                  rows="3"
                  placeholder="Message"
                  className="form-control"
                />
                <Link className="btn btn-outline-primary text-uppercase mt-1">
                  <i className="fa fa-paper-plane-o" aria-hidden="true" />
                  &nbsp;Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
