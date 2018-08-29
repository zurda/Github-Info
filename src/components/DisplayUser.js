import React from 'react';
import ValidatedField from './ValidatedField';

export function addCommas(str){
	return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const displayUser = ({ user }) => {
	const { login, avatar_url, name, bio, blog, location, followers, following, public_repos, hireable } = user;
	return (
		<div className='DisplayUser'>
			<a href={'https://github.com/' + login} target='_blank' >
				<img className='avatar' src={avatar_url} alt='User profile avatar' />
			</a>
			<ValidatedField value={name} tag="h2"/>
			<p>{login}</p>
			<ValidatedField value={bio}/>
			<ValidatedField value={location}/>
			{hireable && <p>Available for job offers</p>}
			{blog && <a href={blog} target="_BLANK">{blog}</a>}
			<ValidatedField fieldName="Public Repos" value={addCommas(public_repos.toString())}/>
			<ValidatedField fieldName="Followers" value={addCommas(followers.toString())}/>
			<ValidatedField fieldName="Following" value={addCommas(following.toString())}/>
		</div>
	);
}

export default displayUser;