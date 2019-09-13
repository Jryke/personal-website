import React from 'react';

const Navbar = () => {
    return (
        <div className="ui top fixed borderless large blue inverted menu">
            <div className="item">
                <i className="us flag"></i>
                <img src="#" alt="JR" />
            </div>
            <div className="item align right" style={{"marginRight": "1em"}}>Jesse Rykerson</div>
            <a className="item" href="#bio">Bio</a>
            <a className="item" href="#skills">Skills</a>
            <a className="item" href="#experience">Experience</a>
            <a className="item" href="#education">Education</a>
            <a className="item" href="#portfolio">Portfolio</a>
            <a className="item" href="#">Resume</a>
            <a className="item" href="#blog">Blog</a>
            <a className="item" href="#">Contact</a>
        </div>
    );
};

export default Navbar