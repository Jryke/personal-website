import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
      <div className='footer'>
				<div className='footer-center'>
					<span className='footer-text'>Designed using <i class='fab fa-react'></i>React.js</span>
				</div>
				<span className='footer-text footer-right'>All photos taken by or of me</span>
      </div>
    )
}
export default Footer
