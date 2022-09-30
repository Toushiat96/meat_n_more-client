import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebook,FaWhatsapp,FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='col-md-4 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='col-md-4 text-reset'>
            <FaFacebook/>
          </a>
          <a href='' className='col-md-4 text-reset'>
            <FaWhatsapp/>
          </a>
          
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          
        </div>
      </section> */}

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Meat N More
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  BEEF
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  MUTTON
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FISH
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  CHICKEN
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='https://www.facebook.com/meatnnmore' className='text-reset'>
               <FaFacebook/> FACEBOOK
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                <FaWhatsapp/> WHATSAPP
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                <FaInstagram/> INSTAGRAM 
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                White House:, Block-D, Road-03, House-34,
                Mohanagar R/A, West Rampura, Hatirjheel
                Dhaka-1219, Bangladesh
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://www.meatnmore.com.bd/'>
          www.meatnmore.com.bd
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer