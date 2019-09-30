import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import '../styles/portfolio.css'

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
					<p>New England Language School Website</p>
					<a href="https://www.newenglandlanguage.com/" target='_blank' rel='noopener noreferrer'>{`https://www.newenglandlanguage.com/`}</a>
				</div>
				<div className='portfolio-img-container'>
					<a href="https://www.newenglandlanguage.com/" target='_blank' rel='noopener noreferrer'>
						<div className='nels-img'></div>
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
					<p className='project-info'>Tortuga Coders Blog</p>
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
