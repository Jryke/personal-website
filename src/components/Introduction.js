import React from 'react';
import {Link} from 'react-router-dom'
import Footer from './Footer'
import '../styles/introduction.css'

const Introduction = () => {
  return (
		<>
			<div className='intro-background'>
				<div className='intro-background-overlay'>
					<div className='center intro-box'>
						<ul className='intro-nav'>
							<li className='intro-nav-link'><Link to='./portfolio'>Portfolio</Link></li>
							<li className='intro-nav-link'><Link to='/skills'>Skills</Link></li>
							<li className='intro-nav-link'><Link to='./experience'>Experience</Link></li>
							<li className='intro-nav-link'><Link to='./education'>Education</Link></li>
							<li className='intro-nav-link'><a href='#'>Resume</a></li>
							<li className='intro-nav-link'><Link to='/about'>About</Link></li>
							<li className='intro-nav-link'><a href='#'>Contact</a></li>
						</ul>
						<div className='intro-box-content'>
				      <h1>JESSE RYKERSON</h1>
				      <h2>WEB/APP DEVELOPER</h2>
							<div className='intro-button'>Contact</div>
							<div className='intro-button'>Resume</div>
						</div>
			    </div>
				</div>
			</div>
			<Footer />
		</>
  )
}

export default Introduction
