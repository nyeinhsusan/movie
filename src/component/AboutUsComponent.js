import React, { Component } from 'react'
import about from '../images/about.jpg';
export class AboutUsComponent extends Component {
  render() {
    return (
    <div class="container-fluid mt-3">
	<div class="jumbotron">
		<h1>About Meals On Wheels</h1>
		<p>Find out why we do what we do and what we are aiming for in the future............. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit, facere ex ad nulla quasi dolorem rerum ea asperiores debitis expedita iusto voluptatem, voluptas aut alias voluptate quod blanditiis reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis aut explicabo maxime animi dignissimos mollitia enim deleniti alias modi necessitatibus quis in, qui atque non praesentium? Eaque, explicabo. Tempore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ut officiis vero maxime similique quaerat, dolor quod molestias, eligendi labore doloribus optio ab, beatae excepturi non vel dolorem reprehenderit? Nobis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quia vel dicta aspernatur excepturi aliquid velit fuga! Veritatis amet cumque libero possimus quaerat provident, ex repellat? Nobis quaerat sapiente voluptatum.
		</p>
        </div>
        <div class="jumbotron">
          <h1>
            The Story of Our Humble Beginnings
    </h1>
		<p>While we do our good work let us not forget that the real solution lies in a world in which charity will have become un necessary ......Lorem ipsum dolor sit amet consectetur adipisicing elit. 
		</p>
        </div>
          {/* what are we section start */}
        <div class="jumbotron">
          <h1>
           What are we 
          </h1>
         
		<p>Fid our why we do what we are arming for in the future 
          </p>
               <div class="container-fluid">
     <img src={about} class="img-fluid rounded mx-auto d-block" alt="..."/>
        </div>
        </div>
    
      
        {/* what are we section end  */}
         {/* What we offer section start */}
     <div class="card mb-5 offer-section mt-4" >
  <div class="row g-0">
    <div class="col-md-5">
      <img src={about} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-7 order-first">
      <div class="card-body">
        <h5 class="card-title">What we offer</h5>
        <p class="card-text">Find out why we do what we do and what we are aiming for in the future </p>
       
      </div>
    </div>
  </div>
        </div>
        {/* what we offer section end  */}
        {/* our team section start */}

        <div class="container">
          <h2 class="mb-3">Our Team</h2>
          <div class="row">
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..."/>
           </div>
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..."/>
            </div>
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..."/>
            </div>
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..."/>
                 </div>
          </div>
          
            <div class="row mt-5 mb-5">
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..."/>
           </div>
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..."/>
            </div>
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..."/>
            </div>
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..."/>
                 </div>
          </div>
          
 </div>
         {/* our team section end  */}
      </div>
   
      
    )
  }
}

export default AboutUsComponent