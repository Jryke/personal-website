import React from 'react';
import '../styles/navbar.css'

const Navbar = () => {
    return (
			<nav>
		    {/*
				<div className="item">
		        <i className="us flag"></i>
		        <img src="#" alt="JR" />
		    </div>
				*/}
				<span className="nav-name"><a href="/">Jesse Rykerson</a></span>
				<ul>
					<li className="nav-link"><a href="#bio">Bio</a></li>
			    <li className="nav-link"><a href="#skills">Skills</a></li>
			    <li className="nav-link"><a href="#experience">Experience</a></li>
			    <li className="nav-link"><a href="#education">Education</a></li>
			    <li className="nav-link"><a href="#portfolio">Portfolio</a></li>
			    <li className="nav-link"><a href="#">Resume</a></li>
			    <li className="nav-link"><a href="#blog">Blog</a></li>
			    <li className="nav-link"><a href="#">Contact</a></li>
				</ul>

			</nav>

      // <div className="ui top fixed borderless large blue inverted menu">
      //     <div className="item">
      //         <i className="us flag"></i>
      //         <img src="#" alt="JR" />
      //     </div>
      //     <div className="item align right" style={{"marginRight": "1em"}}>Jesse Rykerson</div>
      //     <a className="item" href="#bio">Bio</a>
      //     <a className="item" href="#skills">Skills</a>
      //     <a className="item" href="#experience">Experience</a>
      //     <a className="item" href="#education">Education</a>
      //     <a className="item" href="#portfolio">Portfolio</a>
      //     <a className="item" href="#">Resume</a>
      //     <a className="item" href="#blog">Blog</a>
      //     <a className="item" href="#">Contact</a>
      // </div>
    )
}

export default Navbar
