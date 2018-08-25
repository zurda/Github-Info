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
	const { login, avatar_url, name, bio, location, followers, following, isHireable } = user;
	return (
		<div className='DisplayUser'>
			{/* <h2>Username: {login}</h2> */}
			<img className='avatar' src={avatar_url} alt='User profile avatar' />
			{/* <p>Name: {name}</p> */}
			<ValidatedField fieldName="Name" value={name}/>
			{/* <p>Bio: {bio}</p> */}
			<ValidatedField fieldName={"Bio: "} value={bio}/>
			{/* <p>Location: {location}</p> */}
			<ValidatedField fieldName={"Location: "} value={location}/>
			{/* <p>Followers: {followers}</p> */}
			<ValidatedField fieldName={"Followers: "} value={followers}/>
			{/* <p>Following: {following}</p> */}
			<ValidatedField fieldName={"Following: "} value={following}/>
			{isHireable && <p>Looking for a job</p>}
		</div>
	);
}

export default displayUser;