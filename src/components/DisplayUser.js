import React from 'react';

const displayUser = (props) => {
	return (
		<div>
			<h1>Github Profile Display</h1>
			<h2>Username: {props.login}</h2>
			<img src={props.avatar_url} alt='User profile avatar' />
			<p>Name: {props.name}</p>
			<p>Bio: {props.bio}</p>
			<p>Location: {props.location}</p>
			<p>Followers: {props.followers}</p>
			<p>Following: {props.following}</p>
			{props.isHireable && <p>Looking for a job</p>}
		</div>
	);
}

export default displayUser;