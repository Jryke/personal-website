import React from 'react';
import {Link} from 'react-router-dom'

import '../styles/navbar.css'

const Navbar = () => {
    return (
			<nav>
				<span className="nav-name"><Link className="nav-name-text" to="/">Jesse Rykerson</Link></span>
				<span className="nav-name"><Link to='./Jesse Rykerson - Resume.pdf' target='_blank' download>Resume</Link></span>
					<ul className='nav'>
						<li className='nav-link'><Link to='./portfolio'>Portfolio</Link></li>
						<li className='nav-link'><Link to='/skills'>Skills</Link></li>
						<li className='nav-link'><Link to='./experience'>Experience</Link></li>
						<li className='nav-link'><Link to='./education'>Education</Link></li>
						<li className='nav-link'><a href='#'>Resume</a></li>
						<li className='nav-link'><Link to='/about'>About</Link></li>
						<li className='nav-link'><Link to='/contact'>Contact</Link></li>
					</ul>
			</nav>
    )
}

export default Navbar
