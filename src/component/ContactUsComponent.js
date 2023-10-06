import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../component/ContactUsComponent.css';
export class ContactUsComponent extends Component {
  render() {
    return (
      <div class="container">
        {/* contact introduction section start */}
          <div class="jumbotron">
              <h1>Contact</h1>
              <p>Loream hy we do what we do and what we are aiming for in the future............. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit, facere ex ad nulla quasi dolorem rerum ea asperiores debitis expedita iusto voluptatem, voluptas aut alias voluptate quod blanditiis reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis aut explicabo maxime animi dignissimos mollitia enim deleniti alias modi necessitatibus quis in, qui atque non praesentium? Eaque, explicabo. Tempore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ut officiis vero maxime similique quaerat, dolor quod molestias, eligendi labore doloribus optio ab, beatae excepturi non vel dolorem reprehenderit? Nobis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quia vel dicta aspernatur excepturi aliquid velit fuga! Veritatis amet cumque libero possimus quaerat provident, ex repellat? Nobis quaerat sapiente voluptatum.
              </p>
        </div>
        {/* contact introduction section end */}

        {/* site map  and contact form section start */}
        <div class="row mb-5">
                  <div class="col-6 mt-3 col-sm-6 col-md-6 col-xl-6">
                    <h2>Site Map</h2>
            <div class="sitemap mt-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.038876844947!2d103.892378!3d1.3198873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19149fe4a925%3A0x82606eb494fd093c!2sLithan%20Academy!5e0!3m2!1sen!2smm!4v1696482179087!5m2!1sen!2smm" ></iframe>
                  </div>
                  </div>
          
                  < div class=" col-6 col-sm-6 col-md-6 col-xl-6">
                    <h1 class= "mt-3 mb-3">Contact</h1>
                    <Form className="site-contact rounded-3 p-4">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Name" />
              </Form.Group>
              

                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email" />
              </Form.Group>
              


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Send Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <div class="contact-btn d-flex justify-content-center mt-3 mb-3">
                 <Button variant="warning" type="submit">Send</Button>{' '}
              </div>
            </Form>
            
                </div>
          </div>
           {/* site map  and contact form section end  */}
     
     
     

        {/* contact form section end  */}
       </div>
    )
  }
}

export default ContactUsComponent
