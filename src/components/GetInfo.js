import React from 'react';
import axios from 'axios';
import githubUsernameRegex from 'github-username-regex';
import FlashMessage from './FlashMessage';

import Header from './Header';
import DisplayUser from './DisplayUser';
import DisplayRepos from './DisplayRepos';
import Footer from './Footer';

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
			isInvalid: false,
			isFound: true,
		}
		this.getInfo = this.getInfo.bind(this);
		this.inputHandler = this.inputHandler.bind(this);
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

	render() {
		const isInvalid = this.state.isInvalid;
		const isFound = this.state.isFound;
		let userInfo;
		if(isInvalid) {
			// Show a message when the username is invalid
			userInfo =	<FlashMessage type="error">Invalid username</FlashMessage>;
		} else if(!isFound){
			// Show a message when the username is not found
			userInfo =	<FlashMessage type="error">Username not found</FlashMessage>;	
		} else {
			if(!(this.state.user || this.state.repos )){
				userInfo = <FlashMessage type="info">Loading...</FlashMessage>;
			} else {
				userInfo = <div className='UserInfo'>
								<DisplayUser user={this.state.user} />
								<DisplayRepos repos={this.state.repos} />
							</div>
			}
		}
		return (
			<div className='wrapper'>
				<Header 
					change={this.inputHandler}
					click={this.getInfo}
				/>
				<div className='content'>
					{userInfo}
				</div>
				<Footer />
			</div>
		);
	}
}

export default GetInfo;