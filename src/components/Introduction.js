import React from 'react';
import '../styles/introduction.css'

const Introduction = () => {
  return (
		<div className='intro-background'>
			<div className='intro-background-overlay'>
				<div className='center intro-box'>
					<ul className='nav'>
						<li className='nav-link'><a href='#bio'>Bio</a></li>
						<li className='nav-link'><a href='#skills'>Skills</a></li>
						<li className='nav-link'><a href='#experience'>Experience</a></li>
						<li className='nav-link'><a href='#education'>Education</a></li>
						<li className='nav-link'><a href='#portfolio'>Portfolio</a></li>
						<li className='nav-link'><a href='#'>Resume</a></li>
						<li className='nav-link'><a href='#blog'>Blog</a></li>
						<li className='nav-link'><a href='#'>Contact</a></li>
					</ul>
					<div className='intro-box-content'>
			      <h1>JESSE RYKERSON</h1>
			      <h2>WEB/APP DEVELOPER</h2>
						<div className='intro-button'>Contact</div>
						<div className='intro-button'>Resume</div>
					</div>
		    </div>
			</div>
		</div>
  );
};

export default Introduction
