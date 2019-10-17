import React from 'react'

class Header extends React.Component {
	render() {
		return(
			<>
			<div className={`${this.props.componentName}-header-background`}>
				<div className={`${this.props.componentName}-header-background-overlay`}>
					<div className={`${this.props.componentName}-header-text-container`}>
						<h1 className={`${this.props.componentName}-header-text`}>{this.props.text}</h1>
					</div>
					<div className='scroll-down-container'>
						<small className='scroll-down'>scroll down</small>
						<br />
						<i class="fas fa-angle-down"></i>
					</div>
				</div>
			</div>
			</>
		)
	}
}

export default Header
