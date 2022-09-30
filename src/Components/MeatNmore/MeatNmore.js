import React from 'react'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
function MeatNmore() {
  return (
    <div className='container'>
    <div class="row">
    <div class="card-deck">
    <div class="card">
    <img class="card-img-top" src={img1} alt="Card image cap" />
  </div>
  <div class="card">
    <img class="card-img-top" src={img2} alt="Card image cap" />
  </div>
  <div class="card">
    <img class="card-img-top" src={img4} alt="Card image cap" />
  </div> <div class="card">
    <img class="card-img-top" src={img3} alt="Card image cap" />
  </div>

</div>
</div>
    </div>
  )
}

export default MeatNmore