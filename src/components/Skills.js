import React from 'react';
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import '../styles/skills.css'

const Skills = () => {
  return (
		<>
			<Navbar />
			<Header componentName={'skills'} text={'skills'} />
			<div className='skills background-grey'>
				<h1 className='body-header'>Technologies and Libraries:</h1>
				<div className='grid-row-container'>
					<div className='grid-row'>
						<div className='skills-list-wrapper'>
							<div className='skill-info'>
								<h2 className='skills-title'>Front-end</h2>
								<ul className='skills-list'>
									<li>HTML5</li>
									<li>CSS3</li>
									<li>JavaScript ECMAScript 2019</li>
									<li>React.js</li>
									<li>Redux</li>
									<li>Ionic</li>
									<li>Bootstrap</li>
									<li>Semantic UI</li>
									<li>jQuery</li>
									<li>Sass</li>
								</ul>
							</div>
							<div className='skill-info'>
								<h2 className='skills-title'>Back-end</h2>
								<ul className='skills-list'>
									<li>Node</li>
									<li>Express</li>
									<li>MongoDB</li>
									<li>SQL</li>
								</ul>
							</div>
							<div className='skill-info'>
								<h2 className='skills-title'>Applications</h2>
								<ul className='skills-list'>
									<li>MS Office Suite</li>
									<li>Adobe Photoshop</li>
									<li>Salesforce</li>
								</ul>
							</div>
							<div className='skill-info'>
								<h2 className='skills-title'>Other Skills</h2>
								<ul className='skills-list'>
									<li>Bilingual: fluent in English and Spanish</li>
									<li>Creative, self-motivated, goal oriented and an avid learner</li>
									<li>Effective team member and team leader</li>
								</ul>
							</div>
						</div>
						<div className='skills-picture'></div>
					</div>
				</div>
			</div>
			<Footer />
		</>
  )
}

export default Skills
