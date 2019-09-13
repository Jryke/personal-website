import React from 'react';

const InformalEducation = () => {
    return (
        <div className="ui center aligned grid container" style={{padding: '3em'}}>
            <h2 className="row">Informal Education</h2>
            <div className="ui list">
                <div className="item">
                    <h3>Harvard Extension School:</h3>
                    <p>Web Programming/JavaScript Course <br />
                    Grade: A</p>
                </div>
                <br />
                <br />
                <div className="item">
                    <h3>Udemy:</h3>
                    <p>Modern JavaScript Bootcamp (2019) <br />
                    Modern React With Redux</p>
                </div>
                <br />
                <br />
                <div className="item">
                    <h3>FreeCodeCamp.org:</h3>
                    <p>Responsive Web Design Certification <br />
                    JavaScript Algorithms and Data Structures Certification</p>
                </div>
            </div>
        </div>
    )
}

export default InformalEducation