import React from 'react';
import '../styles/skills.css'

const Skills = () => {
  return (
    <div id="skills" className="center section">
      <h2>Skills:</h2>
      <div className="list">
        <h3>Technologies and Libraries:</h3>
				<h4>Front-end:</h4>
				<div className='listWrapper'>
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


				<h4>Back-end:</h4>
				<ul>
					<li>Node</li>
					<li>Express</li>
					<li>MongoDB</li>
				</ul>

				<h4>Other applications:</h4>
				<ul>
					<li>MS Office Suite</li>
					<li>Adobe Photoshop</li>
				</ul>

      </div>
      <br />
      <div>
        <h3>Other Skills:</h3>
				<ul>
					<li>Bilingual: fluent in English and Spanish</li>
					<li>Creative, self-motivated, goal oriented and an avid learner</li>
					<li>Effective team member and team leader</li>
				</ul>
      </div>
    </div>
  )
}

export default Skills
