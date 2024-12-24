import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center" style={{ fontSize: '16px' }}>
        At [College Name] Merchandise, we are dedicated to providing high-quality, stylish apparel and accessories that celebrate the spirit of our college community. From trendy t-shirts to timeless hoodies, our collection is designed for students, alumni, and fans who want to show their college pride. We work closely with local artists to create exclusive designs that reflect the unique culture and values of our college. Whether you’re gearing up for game day or just want to rep your school in style, our shop has something for everyone. Thank you for choosing [College Name] Merchandise – where your college pride comes first!


        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="../assets/image1.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Clothes</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="../assets/image12.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Hats</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="../assets/image19.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Accessoures</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="../assets/image18.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Items</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage