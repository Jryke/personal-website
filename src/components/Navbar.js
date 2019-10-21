import React from 'react';
import {Link} from 'react-router-dom'

import '../styles/navbar.css'

class Navbar extends React.Component {
	state = {
		showDropdown: false
	}
	navToggle = () => {
		this.setState({showDropdown: !this.state.showDropdown})
	}
	showDropdown = () => {
		if (this.state.showDropdown) {
			return (
				<ul className='dropdown-nav'>
					<li className='nav-link'><Link to='/'>Home</Link></li>
					<li className='nav-link'><Link to='/portfolio'>Portfolio</Link></li>
					<li className='nav-link'><Link to='/skills'>Skills</Link></li>
					<li className='nav-link'><Link to='/experience'>Experience</Link></li>
					<li className='nav-link'><Link to='/education'>Education</Link></li>
					<li className='nav-link'><Link to='/about'>About</Link></li>
					<li className='nav-link'><Link to='/contact'>Contact</Link></li>
					<li className='nav-link'><Link to='./Jesse Rykerson - Resume.pdf' target='_blank' download>Resume</Link></li>
				</ul>
			)
		}
	}
	render() {
		return (
			<nav>
				<div className='navbar'>
					<span className="nav-name"><Link className="nav-name-text" to="/">Jesse Rykerson</Link></span>
					<span className="nav-name"><Link to='./Jesse Rykerson - Resume.pdf' target='_blank' download>Resume</Link></span>
						<ul className='nav'>
							<li className='nav-link'><Link to='/portfolio'>Portfolio</Link></li>
							<li className='nav-link'><Link to='/skills'>Skills</Link></li>
							<li className='nav-link'><Link to='/experience'>Experience</Link></li>
							<li className='nav-link'><Link to='/education'>Education</Link></li>
							<li className='nav-link'><Link to='/about'>About</Link></li>
							<li className='nav-link'><Link to='/contact'>Contact</Link></li>
						</ul>
				</div>
				<div className="nav-button" onClick={this.navToggle}>
						<div className="hamburger"></div>
				</div>
				{
					this.showDropdown()
				}
			</nav>
    )
	}
}

export default Navbar
