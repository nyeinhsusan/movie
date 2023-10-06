import React, { Component } from 'react'
import './HomeComponent.css';
import './HeaderComponent.css';

import img1 from '../images/logo.png'

import img2 from '../images/donate.jpg'

import img3 from '../images/meal.jpg'

import img4 from '../images/get-involve.jpg'

import img5 from '../images/cover.jpg'
export class HomeComponent extends Component {
  render() {
    return (
      <div>
        {/* <section class="home" id=" home ">
		<div class="container-cover ">
			<img src={img5} class="img-fluid" alt=" "/>
			<div class="cover-text ">
				<span>hello</span>
				<h1>
					Welcome To<br /> The Meal on wheels family
				</h1>
				<a href="# " class="my-my-btn">Donate Now</a>
				<a href="# " class="play"><i class="fa-regular fa-circle-play "></i>
				</a>
			</div>
		</div>
	</section> */}
{/* Cover section  start */}
		<div class="card text-bg-dark">
 				 <img src={img5} class="card-img" alt="..."/>
			<div class="card-img-overlay">
					<div class="card-body">
							<h5 class="card-title text-start ">Hello </h5>
							<span>Welcome to </span>
    				<p class="card-text">The Meal and Wheel family</p>
    					<a href="#" class="btn btn-info ">Donate Now</a>
  				</div>
			</div> 
		</div>	
				
				{/* cover section end  */}

				{/* donate section start */}
				<div class="donate-section container mt-4 mb-4">
						<div class="row">
	<div class="card col-3">
  <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Donate</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#"><button type="button" class="btn btn-info">Info</button></a>
	</div>
	</div>
						
	<div class="card offset-1 col-3">
  <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Donate</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#"><button type="button" class="btn btn-info">Info</button></a>
							</div>
 
	</div>
						

	<div class="card offset-1 col-3">
  <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Donate</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 		<a href="#"><button type="button" class="btn btn-info">Info</button></a>
	</div>
 </div>					
</div>
</div>
{/* donate section end */}
				
				
{/* introduction start */}
<div class="container intro">
	<div class="jumbotron">
		<h1>Introduction </h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit, facere ex ad nulla quasi dolorem rerum ea asperiores debitis expedita iusto voluptatem, voluptas aut alias voluptate quod blanditiis reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis aut explicabo maxime animi dignissimos mollitia enim deleniti alias modi necessitatibus quis in, qui atque non praesentium? Eaque, explicabo. Tempore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ut officiis vero maxime similique quaerat, dolor quod molestias, eligendi labore doloribus optio ab, beatae excepturi non vel dolorem reprehenderit? Nobis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quia vel dicta aspernatur excepturi aliquid velit fuga! Veritatis amet cumque libero possimus quaerat provident, ex repellat? Nobis quaerat sapiente voluptatum.
		</p>
	</div>
</div>				
{/* introduction end */}
				
{/* the issue start */}
<div class="container intro">
	<div class="jumbotron">
		<h1>The Issue</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit, facere ex ad nulla quasi dolorem rerum ea asperiores debitis expedita iusto voluptatem, voluptas aut alias voluptate quod blanditiis reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis aut explicabo maxime animi dignissimos mollitia enim deleniti alias modi necessitatibus quis in, qui atque non praesentium? Eaque, explicabo. Tempore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ut officiis vero maxime similique quaerat, dolor quod molestias, eligendi labore doloribus optio ab, beatae excepturi non vel dolorem reprehenderit? Nobis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quia vel dicta aspernatur excepturi aliquid velit fuga! Veritatis amet cumque libero possimus quaerat provident, ex repellat? Nobis quaerat sapiente voluptatum.
		</p>
	</div>
</div>
{/* the issue end  */}


{/* deliver section start */}
<div class="container intro">
	<div class="jumbotron">
		<h1>What We deliver </h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit, facere ex ad nulla quasi dolorem rerum ea asperiores debitis expedita iusto voluptatem, voluptas aut alias voluptate quod blanditiis reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis aut explicabo maxime animi dignissimos mollitia enim deleniti alias modi necessitatibus quis in, qui atque non praesentium? Eaque, explicabo. Tempore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ut officiis vero maxime similique quaerat, dolor quod molestias, eligendi labore doloribus optio ab, beatae excepturi non vel dolorem reprehenderit? Nobis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quia vel dicta aspernatur excepturi aliquid velit fuga! Veritatis amet cumque libero possimus quaerat provident, ex repellat? Nobis quaerat sapiente voluptatum.
		</p>
	</div>
</div>		
{/* deliver section end */}
    </div>
    )
  }
}

export default HomeComponent