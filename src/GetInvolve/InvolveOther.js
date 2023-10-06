import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../GetInvolve/InvolveOther.css";
import about from "../images/about.jpg";
export class InvolveOther extends Component {
  render() {
    return (
      <div>
        {/* Become Member start */}
        <div class="container-fluid">
          <h2 class="mt-5 mb-3">Become Member</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro et
            nulla corrupti nam quos molestiae aliquam delectus, non eveniet
            itaque, facere deleniti? Repellat officia consequuntur dolorum
            aperiam dolores, modi repudiandae! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Porro et nulla corrupti nam quos
            molestiae aliquam delectus, non eveniet itaque, facere deleniti?
            Repellat officia consequuntur dolorum aperiam dolores, modi
            repudiandae! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Porro et nulla corrupti nam quos molestiae aliquam delectus,
            non eveniet itaque, facere deleniti? Repellat officia consequuntur
            dolorum aperiam dolores, modi repudiandae! Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Porro et nulla corrupti nam quos
            molestiae aliquam delectus, non eveniet itaque, facere deleniti?
            Repellat officia consequuntur dolorum aperiam dolores, modi
            repudiandae! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Porro et nulla corrupti nam quos molestiae aliquam delectus,
            non eveniet itaque, facere deleniti? Repellat officia consequuntur
            dolorum aperiam dolores, modi repudiandae!
          </p>
        </div>
        <div class="container">
          <h2 class="FAQ-care mt-5 mb-4">FAQ For Membership</h2>
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
        <div class="card mb-5 offer-section mt-4">
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
        {/* Become Member end  */}
        <hr class="border opacity-75  border-orange border-5"></hr>
        {/* Become Partner start */}
        <div class="container-fluid">
          <h2 class="mt-5 mb-3">Become Partner</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro et
            nulla corrupti nam quos molestiae aliquam delectus, non eveniet
            itaque, facere deleniti? Repellat officia consequuntur dolorum
            aperiam dolores, modi repudiandae! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Porro et nulla corrupti nam quos
            molestiae aliquam delectus, non eveniet itaque, facere deleniti?
            Repellat officia consequuntur dolorum aperiam dolores, modi
            repudiandae! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Porro et nulla corrupti nam quos molestiae aliquam delectus,
            non eveniet itaque, facere deleniti? Repellat officia consequuntur
            dolorum aperiam dolores, modi repudiandae! Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Porro et nulla corrupti nam quos
            molestiae aliquam delectus, non eveniet itaque, facere deleniti?
            Repellat officia consequuntur dolorum aperiam dolores, modi
            repudiandae! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Porro et nulla corrupti nam quos molestiae aliquam delectus,
            non eveniet itaque, facere deleniti? Repellat officia consequuntur
            dolorum aperiam dolores, modi repudiandae!
          </p>
        </div>
        <div class="container">
          <h2 class="FAQ-care mt-5 mb-4">FAQ For Partnership</h2>
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
        <div class="card mb-5 offer-section mt-4">
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
        {/* Become Partner end */}
      </div>
    );
  }
}

export default InvolveOther;
