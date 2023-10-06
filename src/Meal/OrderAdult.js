import React, { Component } from "react";
import img1 from "../images/cover.jpg";
import { Link, Redirect } from "react-router-dom";
import "../Meal/OrderAdult.css";
export class OrderAdult extends Component {
  render() {
    return (
      <div>
        {/* Cover section start */}
        <div class="card text-bg-dark mb-5">
          <img src={img1} class="card-img" alt="..." />
          {/* <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div> */}
        </div>
        <hr class="border border-danger border-3 opacity-75"></hr>

        {/* Cover section end  */}
        <div class="ordermeal-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <hr class="border border-danger border-3 opacity-75 mb-5"></hr>
        <div class="container">
          <h2 class="aboutmeal-title mt-3 mb-5">Check Our Meal</h2>
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

export default OrderAdult;
