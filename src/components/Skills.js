import React from 'react';
import Navbar from './Navbar'
import Header from './Header'
import '../styles/skills.css'

const Skills = () => {
  return (
		<>
			<Navbar />
			<Header componentName={'skills'} />
			<div className='center skills section background-grey'>
				<h1>Technologies and Libraries:</h1>
				<div className='grid-row-container'>
					<div className='grid-row'>
						<div id="skills">
							<h2>Front-end:</h2>
							<div className="list">
								<div className='listWrapper'>
									<div>
										<ul>
											<li>HTML5</li>
											<li>CSS3</li>
											<li>JavaScript ECMAScript 2019</li>
											<li>React.js</li>
											<li>Redux</li>
											<li>Bootstrap</li>
											<li>Semantic UI</li>
											<li>jQuery</li>
											<li>Sass</li>
										</ul>
									</div>
									<div>
										<h2>Back-end:</h2>
										<ul>
											<li>Node</li>
											<li>Express</li>
											<li>MongoDB</li>
										</ul>
									</div>
									<div>
										<h2>Other applications:</h2>
										<ul>
											<li>MS Office Suite</li>
											<li>Adobe Photoshop</li>
										</ul>
									</div>
									<div>
										<h3>Other Skills:</h3>
										<ul>
											<li>Bilingual: fluent in English and Spanish</li>
											<li>Creative, self-motivated, goal oriented and an avid learner</li>
											<li>Effective team member and team leader</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className='skills-picture'>
							<div style={{backgroundImage:`url('/images/20181221_123658.jpg')`, backgroundSize:'cover', }}></div>
						</div>
					</div>
				</div>








				</div>
				<br />

		</>
  )
}

export default Skills
