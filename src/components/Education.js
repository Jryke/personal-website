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
		<div className='education background-grey'>
			<h1 className='body-header'>Formal Education</h1>
			<div className='education-grid'>
				<h2 className='education-title'>Graduate</h2>
				<div className='education-details'>
					<p>University of Massachusetts Boston</p>
					<p>MA in Applied Linguistics</p>
					<p>GPA: 3.75</p>
				</div>
				<h2 className='education-title'>Undergraduate</h2>
				<div className='education-details'>
					<p>University of Colorado Boulder</p>
					<p>BA in Anthropology</p>
				</div>
				<h2 className='education-title'>HighSchool</h2>
				<p>Cambridge Rindge & Latin High School</p>
			</div>
			<h1 className='body-header section'>Informal Education</h1>
			<div className='education-grid'>
				<h2 className='education-title'>Harvard Extension</h2>
				<div className='education-details'>
					<p>Web Programming/JavaScript Course</p>
					<p>Grade: A</p>
				</div>
				<h2 className='education-title'>Tortuga Coders</h2>
				<div className='education-details'>
					<p className='education-details'>9-week full-stack JavaScript development bootcamp</p>
				</div>
				<h2 className='education-title'>Udemy</h2>
				<div className='education-details'>
					<p>Modern JavaScript Bootcamp (2019)</p>
					<p>Modern React With Redux</p>
				</div>
				<h2 className='education-title'>FreeCodeCamp.org</h2>
				<div className='education-details'>
					<p>Responsive Web Design Certification</p>
					<p>JavaScript Algorithms and Data Structures Certification</p>
				</div>
			</div>
		</div>
		<Footer />
		</>
	)
}

export default Education
