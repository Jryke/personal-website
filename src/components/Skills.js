import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="ui center aligned grid container" style={{padding: "3em"}}>
      <h2 className="row">Skills:</h2>
      <div className="list">
        <h3>Technologies and Libraries:</h3>
				<h4>Front-end:</h4>
        <div className="item">HTML5</div>
        <div className="item">CSS3</div>
        <div className="item">Modern JavaScript</div>
        <div className="item">React.js</div>
        <div className="item">Redux</div>
				<div className="item">Bootstrap</div>
        <div className="item">Semantic UI</div>
        <div className="item">jQuery</div>
        <div className="item">Sass</div>

				<h4>Back-end:</h4>
				<div className="item">Node</div>
				<div className="item">Express</div>
				<div className="item">MongoDB</div>

				<h4>Other applications:</h4>
        <div className="item">MS Office Suite</div>
        <div className="item">Adobe Photoshop</div>
      </div>
      <br />
      <div className="row">
        <div className="list">
          <h3>Skills:</h3>
          <div className="item">Bilingual: fluent in English and Spanish</div>
          <div className="item">Creative, self-motivated, goal oriented and an avid learner</div>
          <div className="item">Effective team member and team leader</div>
        </div>
      </div>
    </div>
  )
}

export default Skills
