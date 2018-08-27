import React from 'react';

function ValidatedField(props) {
	if (!props.value) {
		return null;
	}
	return (
		<p>{props.fieldName}: {props.value}</p>
	);
}

const displayUser = ({ user, repos }) => {
	const { login, avatar_url, name, bio, location, followers, following, hireable } = user;
	return (
		<div className='DisplayUser'>
			<h2>Username: {login}</h2>
			<img className='avatar' src={avatar_url} alt='User profile avatar' />
			<ValidatedField fieldName="Name" value={name}/>
			<ValidatedField fieldName="Bio" value={bio}/>
			<ValidatedField fieldName="Location" value={location}/>
			<ValidatedField fieldName="Followers" value={followers}/>
			<ValidatedField fieldName="Following" value={following}/>
			{hireable && <p>Available for job offers</p>}
		</div>
	);
}

export default displayUser;