import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Introduction from './Introduction'
import About from './About'
import Skills from './Skills'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Portfolio from './Portfolio'
import App from './App'

class Routes extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<ScrollToTop>
					<Switch>
						<Route path='/about' component={About} />
						<Route path='/skills' component={Skills} />
						<Route path='/experience' component={WorkExperience} />
						<Route path='/education' component={Education} />
						<Route path='/portfolio' component={Portfolio} />
						<Route path='/App' component={App} />
						<Route path='/' component={Introduction} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		)
	}
}

export default Routes
