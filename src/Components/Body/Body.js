import React from 'react'
import beef from '../../images/beef.png'
import mutton from '../../images/mutton.png'
import chiken from '../../images/04.jpg'
import mach from '../../images/fish.png'
import {Link } from 'react-router-dom'
import './Body.css'
function Body() {
  return (
    <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
              <div class="row align-items-center">
            <div class="col-md-6">
                <h1>BEEF</h1>
                <p >we ensure to deliver our customer fresh and hygiene native beef also we provide the highest Quality Products Available in the market.</p>
                
               <Link to="/beef"> <button class="buy-now-button">Buy Now</button></Link>
            </div>
            <div class="col-md-6">
                <img class="d-block w-100" src={beef} alt="First slide" />
            </div>
              </div>
            
          </div>
          <div class="carousel-item">
            <div class="row align-items-center">
                <div class="col-md-6 ">
                <h1>MUTTON</h1>
                <p>we offer high Quality Mutton cuts. Our mutton meat products are from Our farms</p>
               <button class="buy-now-button">Buy Now</button>
                </div>
               <div class="col-md-6">
                <img class="d-block w-100" src={mutton} alt="Second slide" />
               </div>
            </div>
          </div>
          <div class="carousel-item">
              <div class="row align-items-center">
              <div class="col-md-6 ">
                <h1>CHIKEN</h1>
                <p>we supply Organic, Disease free, native broiler and layer chickens directly from our farms to Consumers</p>
                <button class="buy-now-button">Buy Now</button>
              </div>
              <div class="col-md-6">
                <img class="d-block w-100" src={chiken} alt="Third slide" />
              </div>
              </div>
          </div>
          <div class="carousel-item">
              <div class="row align-items-center">
              <div class="col-md-6 ">
                <h1>FISH</h1>
                <p>Getting Fish From us at Affordable Prices at your doors</p>
                <button class="buy-now-button">Buy Now</button>
              </div>
              <div class="col-md-6">
                <img class="d-block w-100" src={mach} alt="Third slide" />
              </div>
              </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
</div>
  )
}

export default Body