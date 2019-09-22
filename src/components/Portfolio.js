import React from 'react'
import Navbar from './Navbar'
import '../styles/portfolio.css'

const Portfolio = () => {
	return (
	<>
		<Navbar />
		<div className="center portfolio section">
			<h2>Portfolio:</h2>
			<h3>Professional Projects:</h3>
			<a href="https://www.newenglandlanguage.com/" target="_blank" rel="noopener noreferrer">newenglandlanguage.com</a>
			<h3>Public accounts:</h3>
			<ul>
				<li><a href="https://www.linkedin.com/in/jesse-rykerson/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
				<li><a href="https://github.com/jryke" target="_blank" rel="noopener noreferrer">Github</a></li>
				<li><a href="https://codepen.io/Jryke" target="_blank" rel="noopener noreferrer">Codepen</a></li>
				<li><a href="https://www.freecodecamp.org/jryke" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a></li>
			</ul>
		</div>
	</>
	)
}

export default Portfolio
