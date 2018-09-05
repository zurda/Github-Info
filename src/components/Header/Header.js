import React, { Component } from 'react';
import Logo from './Logo'

class Header extends Component {
	constructor() {
		super()

		this.keyDownHandler = this.keyDownHandler.bind(this)
	}

	keyDownHandler(event) {
		if (event.keyCode === 13) {
			document.getElementById('searchButton').click()
		}
	}

	render() {
		let searchHistoryElements = []
		if (this.props.searchHistory.length > 0) {
			searchHistoryElements = this.props.searchHistory.map(element => {
				return <option key={element} value={element}/>	
			})
									
			//remove current user
			searchHistoryElements.pop()
		}

		return (
			<div className='header'>
				<Logo />
				<h1 className='title' >Github Profiles</h1>
				<div className='userSearch'>
					<input className='searchInput' id='searchInputID'
						type="text" name="fname" placeholder="Search for a user"
						list='searchHistory'
						onChange={this.props.change}
						onKeyDown={this.keyDownHandler}
					/>
					<datalist id="searchHistory">
						{searchHistoryElements}
					</datalist>

					<button className='searchBtn' id='searchButton' onClick={this.props.click}>Get info</button>
				</div>
				<div className="a2a_kit a2a_kit_size_32 a2a_default_style icons-header">
					<a className="a2a_dd" href="https://www.addtoany.com/share">Social Share</a>
					<a className="a2a_button_copy_link">Copy Link</a>
				</div>
			</div>
		)
	}
}

export default Header