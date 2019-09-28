import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import '../styles/education.css'

const Education = () => {
	return (
		<>
		<Navbar />
		<Header componentName={'education'} text={'education'} />
		<div className='center education background-grey'>
			<div className='experience-body-background-overlay'>
				<div className='grid-row-container'>
					<div className='grid-row'>
						<div>
							<h1>Formal Education:</h1>
							<ul>
								<li>
									<h2>Graduate:</h2>
									<span>University of Massachusetts Boston</span>
									<br />
									<span>MA in Applied Linguistics</span>
									<br />
									<span>GPA: 3.75</span>
								</li>
								<li>
									<h2>Undergraduate:</h2>
									<span>University of Colorado Boulder</span>
									<br />
									<span>BA in Anthropology</span>
								</li>
								<li>
									<h2>HighSchool:</h2>
									<span>Cambridge Rindge & Latin High School</span>
								</li>
							</ul>
						</div>
						<div>
							<h1>Informal Education</h1>
							<ul>
								<li>
									<h2>Harvard Extension School:</h2>
									<p>Web Programming/JavaScript Course <br />
									Grade: A</p>
								</li>
								<li>
									<h2>Tortuga Coders</h2>
									<p>9-week full-stack JavaScript web development bootcamp</p>
								</li>
								<li>
									<h2>Udemy:</h2>
									<p>Modern JavaScript Bootcamp (2019) <br />
									Modern React With Redux</p>
								</li>
								<li>
									<h2>FreeCodeCamp.org:</h2>
									<p>Responsive Web Design Certification <br />
									JavaScript Algorithms and Data Structures Certification</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
		</>
	)
}

export default Education
