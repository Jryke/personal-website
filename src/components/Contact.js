import React from "react"
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import '../styles/contact.css'

const Contact = () => {
  return (
		<>
			<Navbar />
			<Header componentName={'contact'} text={'contact me'}/>
			<div className='contact contact-padding'>
      <div className='contact-name'>
        <h1 className='jesse'>Jesse</h1>
        <h1 className='rykerson'>RYKERSON</h1>
      </div>
				<div className='contact-grid-col'>
          <div className='contact-div'>
            <h2 className='contact-title'>Email</h2>
            <a className='contact-info' href='mailto:rykerson@gmail.com?subject=website%20inquiry'>Rykerson@gmail.com</a>
          </div>
          <div className='contact-div'>
            <h2 className='contact-title'>Phone</h2>
            <a className ='contact-info' href="tel:617-331-2564">617-331-2564</a>
          </div>
				</div>
      </div>
			<Footer />
		</>
  )
}

export default Contact
