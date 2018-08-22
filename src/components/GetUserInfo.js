import React from 'react';
import axios from 'axios';
import DisplayUser from './DisplayUser';

class GetUserInfo extends React.Component {
	constructor (props) {
		super(props);
		this.state = { 
			user: null,
			repos: null 
		}
	}

	componentWillMount() {
		const username = 'zurda';
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

	render() {
		if (!(this.state.user || this.state.repos || this.state.followers)) {
			return <div>Loading</div>
		}
		return (
			// <pre>{JSON.stringify(this.state.user, null, '  ')}</pre>
			// <pre>{JSON.stringify(this.state.repos, null, '  ')}</pre>
			<div>
				<DisplayUser 
					login={this.state.user.login} 
					avatar_url={this.state.user.avatar_url}
					name={this.state.user.name}
					bio={this.state.user.bio}
					location={this.state.user.location}
					followers={this.state.user.followers}
					following={this.state.user.following}
					isHireable={this.state.user.hireable}
				/>

			</div>
		);
	}
}

export default GetUserInfo;