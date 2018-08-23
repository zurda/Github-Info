import React from 'react';

const displayUser = ({user, repos}) => {
	const {login, avatar_url, name, bio, location, followers, following, isHireable} = user;
	return (
		<div className='DisplayUser'>
			<h2>Username: {login}</h2>
			<img className='avatar' src={avatar_url} alt='User profile avatar' />
			<p>Name: {name}</p>
			<p>Bio: {bio}</p>
			<p>Location: {location}</p>
			<p>Followers: {followers}</p>
			<p>Following: {following}</p>
			{isHireable && <p>Looking for a job</p>}
		</div>
	);
}

export default displayUser;