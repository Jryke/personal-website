import React from 'react';
import {Link} from 'react-router-dom'
import Footer from './Footer'
import '../styles/introduction.css'

const Introduction = () => {
  return (
		<>
			<div className='intro-background'>
				<div className='intro-background-overlay'>
					<div className='intro-box'>
						<div class="nav-button navbar-link navbar-link-toggle" onclick="navToggle()">
							<div class="hamburger"></div>
						</div>
						<ul className='intro-nav'>
							<li className='intro-nav-link'><Link to='./portfolio'>Portfolio</Link></li>
							<li className='intro-nav-link'><Link to='/skills'>Skills</Link></li>
							<li className='intro-nav-link'><Link to='./experience'>Experience</Link></li>
							<li className='intro-nav-link'><Link to='./education'>Education</Link></li>
							<li className='intro-nav-link'><Link to='/about'>About</Link></li>
							<li className='intro-nav-link'><Link to='/contact'>Contact</Link></li>
						</ul>
						<div className='intro-box-content'>
							<div>
								<h1 className='jesse'>Jesse</h1>
								<h1 className='rykerson'>RYKERSON</h1>
							</div>
				      <h2>WEB/APP DEVELOPER</h2>
							<Link to='/contact'>
								<div className='intro-button'>
									Contact
								</div>
							</Link>
							<Link to='./Jesse Rykerson - Resume.pdf' target='_blank' download>
								<div className='intro-button'>
									Resume
								</div>
							</Link>
						</div>
			    </div>
				</div>
			</div>
			<Footer />
		</>
  )
}

export default Introduction
