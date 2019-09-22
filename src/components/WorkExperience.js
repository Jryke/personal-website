import React from 'react'
import Navbar from './Navbar'

const WorkExperience = () => {
	return (
		<>
			<Navbar />
			<div className="center experience section">
				<h2>Professional Work Experience</h2>
				<h3>
					Professor of English - Boston Language Institute
					<br />
					2017 - 2019
				</h3>
				<span>Duties:</span>
				<ul>
					<li>Teaching and training of English For Foreign Born Professionals</li>
					<li>Teacher of Intermediate, High-Intermediate and Conversational English for English language learners</li>
					<li>Development of curriculum, lesson plans, and classroom activities</li>
				</ul>
				<h3>
					Senior Sales Consultant - iPayment Inc.
					<br />
					2015 - 2018
				</h3>
				<span>Duties:</span>
				<ul>
					<li>Sales of merchant accounts and SaaS</li>
					<li>Account representative for the lifetime of the account – maintenance (management) and customer service for accounts</li>
					<li>Selling/working for 3 different brands within company as an English and Spanish representative</li>
					<li>Experience in sales and extensive knowledge of credit card processing industry</li>
					<li>One of the top producers in sales and revenue for 3 years.</li>
				</ul>
				<h3>
					Professor of English and Team Leader - Universidad Del Norte
					<br />
					2011 - 2014
				</h3>
				<span>Duties:</span>
				<ul>
					<li>Taught English to over 100 University students each semester</li>
					<li>Led groups of teachers in several English language levels</li>
					<li>Created assessments/exams for use in classes</li>
				</ul>
			</div>
		</>
    )
}

export default WorkExperience
