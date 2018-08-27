import React from 'react';
import axios from 'axios';
import githubUsernameRegex from 'github-username-regex';

import logo from '../logo.png';
import DisplayUser from './DisplayUser';
import DisplayRepos from './DisplayRepos';

const id = "f5ce4435afdfe23711c6";
const sec = "1daa19d525b9e92f034ebe504075e5b1600eea46";
const params = "?client_id=" + id + "&client_secret=" + sec;

class GetInfo extends React.Component {
	constructor (props) {
		super(props);
		this.state = { 
			input: 'getify',
			user: null,
			repos: null,
			isInvalid: false
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
				})
				// handle error
				.catch( (error) => { 
					console.log(error)
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
		let userDisplay;
		if(isInvalid) {
			// Show a message when the username is invalid
			userDisplay = <div className='DisplayUser'><h2>Invalid username</h2></div>;
		} else {
			userDisplay = (!(this.state.user || this.state.repos )) ? 
				<div className='loading'><h2>Loading...</h2></div> : 
				<div>
					<DisplayUser
						user={this.state.user} 
					/>
					<DisplayRepos
						repos={this.state.repos} 
					/>
				</div>
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
			        	{userDisplay}
	       			</div>

				</div>
		);
	}
}

export default GetInfo;