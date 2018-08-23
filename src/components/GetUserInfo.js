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
	}

	componentWillMount() {
		this.getInfo();
	}

	getInfo() {
		const username = this.state.input;
		// Get user data
		axios.get('https://api.github.com/users/' + username)
			.then( (response) => {
				this.setState({user: response.data});
		});
		// Get repos data
		axios.get('https://api.github.com/users/' + username + '/repos')
			.then( (response) => {
				this.setState({repos: response.data});
		});

	}

	inputHandler(event) {
		const input = event.target.value;
		console.log('input:', input);
		this.setState({input});
	}

	keyDownHandler(event) {
		if (event.keyCode === 13)
            document.getElementById('searchBtn').click();
	}

	render() {
		if (!(this.state.user || this.state.repos || this.state.followers)) {
			return <div>Loading</div>
		}
		return (
			<div>

			    <div className='header'>
		        	<img className='logo' src={logo} alt='Github Profile Display Logo' />
		        	<h1 className='title' >Github Profile Display</h1>
		        	<div className='userSearch'>
		        		<input className='searchInput'
		        			type="text" name="fname" placeholder="Search for a user"
						
							onChange={this.inputHandler}
							onKeyDown={this.keyDownHandler}
						/>
						<button className='searchBtn' id='searchBtn' onClick={this.getInfo}>Get info</button>
		        	</div>
       			</div>
				
				<DisplayUser
					user={this.state.user} 
					repos={this.state.repos}
				/>

			</div>
		);
	}
}

export default GetUserInfo;