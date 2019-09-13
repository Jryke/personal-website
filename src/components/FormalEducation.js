import React from 'react';

const FormalEducation = () => {
  return (
    <div id="education" className="ui center aligned grid container" style={{padding: '3em'}}>
      <h2 className="row">Formal Education:</h2>
      <div className="ui list">
				<div className="item">
					<h3>Graduate:</h3>
					<p>University of Massachusetts Boston <br />
					MA in Applied Linguistics <br />
					GPA: 3.75</p>
				</div>
        <br />
        <br />
        <div className="item">
          <h3>Undergraduate:</h3>
          <p>University of Colorado Boulder <br />
          BA in Anthropology</p>
        </div>
        <br />
        <br />
				<div className="item">
            <h3>HighSchool:</h3>
            <p>Cambridge Rindge & Latin High School</p>
        </div>
      </div>
    </div>
  )
}

export default FormalEducation
