import React from 'react'
import Allproductshow from '../Allproducts/Allproductshow'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MeatNmore from '../MeatNmore/MeatNmore'
import Productshow from '../Productshow/Productshow'


const Home = ({pageLoad , cartValue}) => {
  return (
    <div>
        <Header pageLoad={pageLoad} ></Header>
        <Body></Body>
         <Productshow></Productshow>
         <MeatNmore></MeatNmore>
         <Footer></Footer>
         {/* <Allproductshow></Allproductshow> */}
    </div>
  )
}

export default Home