import React from 'react';
import axios from 'axios';
import githubUsernameRegex from 'github-username-regex';
import FlashMessage from './FlashMessage';

import logo from '../logo.png';
import params from '../auth.js';
import DisplayUser from './DisplayUser';
import DisplayRepos from './DisplayRepos';


class GetInfo extends React.Component {
	constructor (props) {
		super(props);
		this.state = { 
			input: 'getify',
			user: null,
			repos: null,
			isInvalid: false,
			isFound: true,
		}
		this.getInfo = this.getInfo.bind(this);
		this.inputHandler = this.inputHandler.bind(this);
		this.keyDownHandler = this.keyDownHandler.bind(this);
	}

	componentDidMount() {
		this.getInfo();
	}

	getInfo() {
		const username = this.state.input;
		// Check if the username is a valid one
		if(!githubUsernameRegex.test(username)) {
			// if not, set state to reflect so
			// and exit the function without calling the API
			this.setState({isInvalid: true})
			return;
		} else { this.setState({isInvalid: false})}
		// Get user data
		axios.get('https://api.github.com/users/' + username + params)
			.then( 
				// handle success
				(response) => {
					this.setState({user: response.data})
					this.setState({isFound: true});
				})
				// handle error
				.catch( (error) => {
					if(error.response.status === 404){
						this.setState({isFound: false});
					}
				}
			);
		// Get repos data
		axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
			.then(
				// handle success 
				(response) => {
					this.setState({repos: response.data});
					console.log(response.data);
				})
				// handle error
				.catch( (error) => { 
					console.log(error)
				}
			);
		}

	inputHandler(event) {
		const input = event.target.value;
		this.setState({input});
	}

	keyDownHandler(event) {
		if (event.keyCode === 13) {
            document.getElementById('searchButton').click();
		}
	}

	render() {
		const isInvalid = this.state.isInvalid;
		const isFound = this.state.isFound;
		let userDisplay;
		let flashMessage;
		if(isInvalid) {
			// Show a message when the username is invalid
			flashMessage =	<FlashMessage type="error">Invalid username</FlashMessage>;
		} else if(!isFound){
		// Show a message when the username is not found
		flashMessage =	<FlashMessage type="error">Username not found</FlashMessage>;	
		} else {
			if(!(this.state.user || this.state.repos )){
				flashMessage = <FlashMessage type="info">Loading...</FlashMessage>;
			} else {
				userDisplay = <div>
								<DisplayUser user={this.state.user} />
								<DisplayRepos repos={this.state.repos} />
							  </div>
			}
		}
			return (
				<div>
				    <div className='header'>
			        	<img className='logo' src={logo} alt='Github Profile Display Logo' />
			        	<h1 className='title' >Github Profile Display</h1>
			        	<div className='userSearch'>
			        		<input className='searchInput' id='searchInputID'
			        			type="text" name="fname" placeholder="Search for a user"
							
								onChange={this.inputHandler}
								onKeyDown={this.keyDownHandler}
							/>
							<button className='searchBtn' id='searchButton' onClick={this.getInfo}>Get info</button>
			        	</div>
						{flashMessage}
			        	{userDisplay}
	       			</div>

				</div>
		);
	}
}

export default GetInfo;