import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import '../styles/workexperience.css'

const WorkExperience = () => {
	return (
		<>
			<Navbar />
			<Header componentName={'experience'} text={'experience'} />
			<div className='experience background-grey'>
				<div className='grid-row-container'>
					<div className='experience-grid-row'>
						<div className='experience-picture-wrapper'>
							<div className='experience-picture'></div>
						</div>
						<div className='experience-info'>
							<div className='job-info'>
								<h2 className='job-title'>
									Freelance Web/Mobile Developer and Consultant
								</h2>
								<p className='job-dates'>CURRENT</p>
								<ul className='duties-list'>
									<li>Develop web and mobile applications based on customer needs</li>
									<li>Ongoing maintenance, support and reliability</li>
									<li>Consult code review on existing applications</li>
								</ul>
							</div>
							<div className='job-info'>
								<h2 className='job-title'>
									Professor of English, Boston Language Institute
								</h2>
								<p className='job-dates'>2017 - 2019</p>
								<ul className='duties-list'>
									<li>Teaching and training of English For Foreign Born Professionals</li>
									<li>Teacher of Intermediate, High-Intermediate and Conversational English for English language learners</li>
									<li>Development of curriculum, lesson plans, and classroom activities</li>
								</ul>
							</div>
							<div className='job-info'>
								<h2 className='job-title'>
									Senior Sales Consultant, iPayment Inc.
								</h2>
								<p className='job-dates'>2015 - 2018</p>
								<ul className='duties-list'>
									<li>Sales of merchant accounts and SaaS</li>
									<li>Account representative for the lifetime of the account – maintenance (management) and customer service for accounts</li>
									<li>Selling/working for 3 different brands within company as an English and Spanish representative</li>
									<li>Experience in sales and extensive knowledge of credit card processing industry</li>
									<li>One of the top producers in sales and revenue for 3 years.</li>
								</ul>
							</div>
							<div className='job-info'>
								<h2 className='job-title'>
									Professor of English and Team Leader, Universidad Del Norte
								</h2>
								<p className='job-dates'>2011 - 2014</p>
								<ul className='duties-list'>
									<li>Taught English to over 100 University students each semester</li>
									<li>Led groups of teachers in several English language levels</li>
									<li>Created assessments/exams for use in classes</li>
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

export default WorkExperience
