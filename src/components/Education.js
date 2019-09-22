import React from 'react'
import Navbar from './Navbar'
import '../styles/education.css'

const Education = () => {
	return (
		<>
		<Navbar />
		<div className="center education section">
			<h2>Formal Education:</h2>
			<ul>
				<li>
					<h3>Graduate:</h3>
					<span>University of Massachusetts Boston</span>
					<br />
					<span>MA in Applied Linguistics</span>
					<br />
					<span>GPA: 3.75</span>
				</li>
				<li>
					<h3>Undergraduate:</h3>
					<span>University of Colorado Boulder</span>
					<br />
					<span>BA in Anthropology</span>
				</li>
				<li>
					<h3>HighSchool:</h3>
					<span>Cambridge Rindge & Latin High School</span>
				</li>
			</ul>
		</div>
		<div className="center education section">
			<h2>Informal Education</h2>
			<ul>
				<li>
					<h3>Harvard Extension School:</h3>
					<p>Web Programming/JavaScript Course <br />
					Grade: A</p>
				</li>
				<li>
					<h3>Tortuga Coders</h3>
					<p>9-week full-stack JavaScript web development bootcamp</p>
				</li>
				<li>
					<h3>Udemy:</h3>
					<p>Modern JavaScript Bootcamp (2019) <br />
					Modern React With Redux</p>
				</li>
				<li>
					<h3>FreeCodeCamp.org:</h3>
					<p>Responsive Web Design Certification <br />
					JavaScript Algorithms and Data Structures Certification</p>
				</li>
			</ul>
		</div>
		</>
	)
}

export default Education
