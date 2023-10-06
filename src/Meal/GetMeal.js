import React, { Component } from "react";
import img4 from "../images/get-involve.jpg";
import { Link, Redirect } from "react-router-dom";
import about from "../images/about.jpg";
import img1 from "../images/cover.jpg";
import "../Meal/GetMeal.css";
export class GetMeal extends Component {
  render() {
    return (
      <div>
        {/* Cover section  start */}
        <div class="card text-bg-dark">
          <img src={img4} class="card-img" alt="..." />
          <div class="card-img-overlay">
            <div class="card-body mt-5">
              <h1 class="getmeal-text">
                "Enjoy your Delicous Meal with a side of smiles"
              </h1>
            </div>
          </div>
        </div>

        {/* cover section end  */}
        <div class="card mb-5 offer-section mt-4 get-involve">
          <div class="row g-0">
            <div class="col-md-5">
              <img src={about} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-7 ">
              <div class="card-body">
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro et nulla corrupti nam quos molestiae aliquam delectus,
                  non eveniet itaque, facere deleniti? Repellat officia
                  consequuntur dolorum aperiam dolores, modi repudiandae! Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Porro et
                  nulla corrupti nam quos molestiae aliquam delectus, non ev
                </p>
                <div class="d-flex justify-content-center order-btn">
                  <Link to="/register" class="btn btn-info">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Get involve introduction end  */}
        {/* Get involve card start w-16*/}
        <div class="container check-meal mb-5">
          <div class="row mb-3">
            <div class="col-3 w-16">
              <div class="card check-meal">
                <div class="card-body">
                  <h5 class="card-title">Order Meals</h5>
                  <p class="card-text">Content for Order Meals</p>
                  <img src={img1} class="card-img-top" alt="..." />
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  <div class="d-flex justify-content-center order-btn">
                    <Link to="/signup" class="check-meal">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3 w-16">
              <div class="card check-meal">
                <div class="card-body">
                  <h5 class="card-title">Meals for Older Adults</h5>
                  <p class="card-text">Content for meals for older adults</p>
                  <img src={img1} class="card-img-top" alt="..." />
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  <div class="d-flex justify-content-center order-btn">
                    <Link to="/signup" class="check-meal">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3 w-16">
              <div class="card check-meal ">
                <div class="card-body">
                  <h5 class="card-title">For Care Givers </h5>
                  <p class="card-text">Content for care givers</p>
                  <img src={img1} class="card-img-top" alt="..." />
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  <div class="d-flex justify-content-center order-btn">
                    <Link to="/signup" class="check-meal">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3 w-16">
              <div class="card check-meal ">
                <div class="card-body">
                  <h5 class="card-title">About Meals</h5>
                  <p class="card-text">Content for about meals</p>
                  <img src={img1} class="card-img-top" alt="..." />
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  <div class="d-flex justify-content-center order-btn">
                    <Link to="/signup" class="check-meal">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Get Meal card end  */}
      </div>
    );
  }
}

export default GetMeal;
