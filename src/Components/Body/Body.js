import React from 'react'
import beef from '../../images/beef.jpg'
import mutton from '../../images/2.jpg'
import chiken from '../../images/04.jpg'
import mach from '../../images/12.jpg'
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                
                <button class="buy-now-button">Buy Now</button>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum in iste rerum perferendis suscipit ipsa commodi, dolores laborum iusto sequi, incidunt voluptas eos est molestiae temporibus minima corporis voluptatibus!</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum in iste rerum perferendis suscipit ipsa commodi, dolores laborum iusto sequi, incidunt voluptas eos est molestiae temporibus minima corporis voluptatibus!</p>
              </div>
              <div class="col-md-6">
                <img class="d-block w-100" src={chiken} alt="Third slide" />
              </div>
              </div>
          </div>
          <div class="carousel-item">
              <div class="row align-items-center">
              <div class="col-md-6 ">
                <h1>MACH</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum in iste rerum perferendis suscipit ipsa commodi, dolores laborum iusto sequi, incidunt voluptas eos est molestiae temporibus minima corporis voluptatibus!</p>
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