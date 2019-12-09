import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import '../styles/portfolio.css'
import { Link } from 'react-router-dom'

const Portfolio = () => {
	return (
	<>
		<Navbar />
		<Header componentName={'portfolio'} text={'portfolio'} />
		<div className='portfolio background-grey'>
			<div className='portfolio-grid'>
				<h1 className='body-header right'>Professional Projects</h1>
				<div></div>
				<div className='project-info right'>
					<h2><a href="https://www.newenglandlanguage.com/" target='_blank' rel='noopener noreferrer'>New England Language School</a></h2>
					<a href="https://www.newenglandlanguage.com/" target='_blank' rel='noopener noreferrer'>{`www.newenglandlanguage.com/`}</a>
				</div>
				<div className='portfolio-img-container'>
					<a href="https://www.newenglandlanguage.com/" target='_blank' rel='noopener noreferrer'>
						<div className='nels-img'></div>
					</a>
				</div>

				<h1 className='body-header right'>Personal Projects</h1>
				<div></div>
				<div className='project-info right'>
					<h2><a href="https://coursefill-react.herokuapp.com/" target='_blank' rel='noopener noreferrer'>CourseFill</a></h2>
					<small>(course registration application)</small>
					<p><a href="https://github.com/Jryke/CourseFill-react" target='_blank' rel='noopener noreferrer'>GitHub front end (React) repository</a></p>
					<p><a href="https://github.com/Jryke/CourseFill-api" target='_blank' rel='noopener noreferrer'>GitHub back end (API) repository</a></p>
				</div>
				<div className='portfolio-img-container portfolio-rectangle-img-container'>
					<a href="https://coursefill-react.herokuapp.com/" target='_blank' rel='noopener noreferrer'>
						<div className='coursefill-img'></div>
					</a>
				</div>

				<div className='project-info right'>
					<h2><a href="https://airbnb-jryke.herokuapp.com/" target='_blank' rel='noopener noreferrer'>Airbnb clone</a></h2>
					<small>(Airbnb clone website created by me)</small>
					<p><a href="https://github.com/Jryke/airbnb-react" target='_blank' rel='noopener noreferrer'>GitHub front end (React) repository</a></p>
					<p><a href="https://github.com/Jryke/airbnb-api" target='_blank' rel='noopener noreferrer'>GitHub back end (API) repository</a></p>
				</div>
				<div className='portfolio-img-container portfolio-rectangle-img-container'>
					<a href="https://airbnb-jryke.herokuapp.com/" target='_blank' rel='noopener noreferrer'>
						<div className='airbnb-img'></div>
					</a>
				</div>

				<h1 className='body-header right'>Public accounts</h1>
				<div></div>
				<ul className='right'>
					<li><a href="https://www.linkedin.com/in/jesse-rykerson/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
					<li><a href="https://github.com/jryke" target="_blank" rel="noopener noreferrer">Github</a></li>
					<li><a href="https://codepen.io/Jryke" target="_blank" rel="noopener noreferrer">Codepen</a></li>
					<li><a href="https://www.freecodecamp.org/jryke" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a></li>
				</ul>
				<div></div>
				<h1 className='body-header section right'>Blog posts</h1>
				<div></div>
				<div className='right'>
					<h2 className='project-info'>Tortuga Coders Blog</h2>
					<a className='blog-title' href='https://blog.tortugacoders.com/learning-a-coding-language-is-the-same-as-learning-a-human-language/' target='_blank' rel='noopener noreferrer'>Learning a coding language is the same as learning a human language</a>
				</div>
				<div className='portfolio-img-container'>
					<a href='https://blog.tortugacoders.com/learning-a-coding-language-is-the-same-as-learning-a-human-language/' target='_blank' rel='noopener noreferrer'>
						<div className='tortuga-blog-img'></div>
					</a>
				</div>
			</div>
		</div>
		<Footer />
	</>
	)
}

export default Portfolio
