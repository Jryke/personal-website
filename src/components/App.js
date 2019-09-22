import React from 'react';
import Introduction from './Introduction';
import Skills from './Skills';
import About from './About';
import FormalEducation from './FormalEducation';
import InformalEducation from './InformalEducation';
import WorkExperience from './WorkExperience';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Footer from './Footer';
import '../styles/global.css'


const App = () => {
    return (
        <>
            <Introduction />
            <About />
            <Skills />
            <WorkExperience />
            <FormalEducation />
            <InformalEducation />
            <Portfolio />
            <Blog />
            <Footer />
        </>
    );
};

export default App
