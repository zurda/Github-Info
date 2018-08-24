import React from 'react';
import axios from 'axios';
import logo from '../logo.png';
import DisplayUser from './DisplayUser';

class GetUserInfo extends React.Component {
	constructor (props) {
		super(props);
		this.state = { 
			input: 'getify',
			user: null,
			repos: null 
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
		// Get user data
		axios.get('https://api.github.com/users/' + username)
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
		axios.get('https://api.github.com/users/' + username + '/repos')
			.then(
				// handle success 
				(response) => {
					this.setState({repos: response.data}) 
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
		const userDisplay = (!(this.state.user || this.state.repos || this.state.followers)) ? 
			<div>Loading</div> : 
			<DisplayUser
				user={this.state.user} 
				repos={this.state.repos}
			/>

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

export default GetUserInfo;