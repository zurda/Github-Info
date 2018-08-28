import React from 'react';
import ValidatedField from './ValidatedField';

const displayUser = ({ user }) => {
	const { login, avatar_url, name, bio, blog, location, followers, following, public_repos, hireable } = user;
	return (
		<div className='DisplayUser'>
			<img className='avatar' src={avatar_url} alt='User profile avatar' />
			<ValidatedField value={name} tag="h2"/>
			<p>{login}</p>
			<ValidatedField value={bio}/>
			<ValidatedField value={location}/>
			{hireable && <p>Available for job offers</p>}
			{blog && <a href={blog} target="_BLANK">{blog}</a>}
			<ValidatedField fieldName="Public Repos" value={public_repos}/>
			<ValidatedField fieldName="Followers" value={followers}/>
			<ValidatedField fieldName="Following" value={following}/>
		</div>
	);
}

export default displayUser;