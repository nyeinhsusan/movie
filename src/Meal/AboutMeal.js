import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import img1 from "../images/cover.jpg";
import "../Meal/AboutMeal.css";
export class AboutMeal extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <h2 class="FAQ-care">About Meals</h2>
          <p>
            <h3>Title</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro et
            nulla corrupti nam quos molestiae aliquam delectus, non eveniet
            itaque, facere deleniti? Repellat officia consequuntur dolorum
            aperiam dolores, modi repudiandae! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Porro et nulla corrupti nam quos
            molestiae aliquam delectus, non eveniet itaque, facere deleniti?
          </p>
          <p>
            <h3>Title</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro et
            nulla corrupti nam quos molestiae aliquam delectus, non eveniet
            itaque, facere deleniti? Repellat officia consequuntur dolorum
            aperiam dolores, modi repudiandae! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Porro et nulla corrupti nam quos
            molestiae aliquam delectus, non eveniet itaque, facere deleniti?
          </p>
          <p>
            <h3>Title</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro et
            nulla corrupti nam quos molestiae aliquam delectus, non eveniet
            itaque, facere deleniti? Repellat officia consequuntur dolorum
            aperiam dolores, modi repudiandae! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Porro et nulla corrupti nam quos
            molestiae aliquam delectus, non eveniet itaque, facere deleniti?
          </p>
          <p>
            <h3>Title</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro et
            nulla corrupti nam quos molestiae aliquam delectus, non eveniet
            itaque, facere deleniti? Repellat officia consequuntur dolorum
            aperiam dolores, modi repudiandae! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Porro et nulla corrupti nam quos
            molestiae aliquam delectus, non eveniet itaque, facere deleniti?
          </p>
        </div>
        {/* about meal section end  */}
        <div class="container">
          <h2 class="aboutmeal-title mt-3 mb-3">Check Our Meal</h2>
        </div>
        {/* check our meal section start */}
        <div class="container check-meal">
          <div class="row mb-3">
            <div class="col-4">
              <div class="card check-meal">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  <div class="d-flex justify-content-center order-btn">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-4">
              <div class="card">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-4">
              <div class="card">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* check our meal section end */}
      </div>
    );
  }
}

export default AboutMeal;
