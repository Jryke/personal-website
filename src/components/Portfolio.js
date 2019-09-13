import React from 'react';

const Portfolio = () => {
  return (
    <div id="portfolio" className="ui center aligned grid container" style={{padding: "3em"}}>
      <h2>Portfolio:</h2>
      <h3 className="row">Professional Projects:</h3>
      <a href="https://www.newenglandlanguage.com/" target="_blank" rel="noopener noreferrer">newenglandlanguage.com</a>
      <h3 className="row">Public accounts:</h3>
      <div className="list">
        <div className="item"><a href="https://www.linkedin.com/in/jesse-rykerson/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
        <div className="item"><a href="https://github.com/jryke" target="_blank" rel="noopener noreferrer">Github</a></div>
        <div className="item"><a href="https://codepen.io/Jryke" target="_blank" rel="noopener noreferrer">Codepen</a></div>
        <div className="item"><a href="https://www.freecodecamp.org/jryke" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a></div>
      </div>
    </div>
  )
}

export default Portfolio
