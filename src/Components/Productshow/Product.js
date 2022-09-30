import React from 'react'

function Product(props) {
    console.log(props)
    const {name,price,img}=props.products
  return (
    <div className="col-md-3 col-sm-6">
    <div class="card  ">
      <img class="card-img-top" src={img} alt="Card image cap" />
      <div class="card-body text-center">
        <h5 class="card-title">{name} </h5>
        <p class="card-text">{price}</p>
        <button  class="buy-now-button">Add to Cart</button>
      </div>
   
    </div>
    </div>

  )
}

export default Product