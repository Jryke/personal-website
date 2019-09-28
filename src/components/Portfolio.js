import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import '../styles/portfolio.css'

const Portfolio = () => {
	return (
	<>
		<Navbar />
		<Header componentName={'portfolio'} />
		<div className="center portfolio section background-grey">
			<h1>Portfolio:</h1>
			<div className='grid-row-container'>
				<div className='grid-row'>
					<div>
						<h2>Professional Projects:</h2>
						<a href="https://www.newenglandlanguage.com/" target="_blank" rel="noopener noreferrer">newenglandlanguage.com</a>
					</div>
					<div>
						<h2>Public accounts:</h2>
						<ul>
							<li><a href="https://www.linkedin.com/in/jesse-rykerson/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
							<li><a href="https://github.com/jryke" target="_blank" rel="noopener noreferrer">Github</a></li>
							<li><a href="https://codepen.io/Jryke" target="_blank" rel="noopener noreferrer">Codepen</a></li>
							<li><a href="https://www.freecodecamp.org/jryke" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</>
	)
}

export default Portfolio
