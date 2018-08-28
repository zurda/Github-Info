import React from 'react';
import ValidatedField from './ValidatedField';

const displayRepos = ({ repos }) => {
	const stargazers_total = repos ? 
		repos.reduce( (prev,next) => prev + next.stargazers_count,0) : null;

	return (
		<div className='DisplayRepos'>
			<ValidatedField fieldName="Stargazers" value={stargazers_total}/>
		</div>
	);
}

export default displayRepos;