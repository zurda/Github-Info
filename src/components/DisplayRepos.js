import React from 'react';
import ValidatedField from './ValidatedField';

const displayRepos = ({ repos }) => {
	console.log(repos);
	let stargazers_total, most_starred_repo;
	if (repos) {
		stargazers_total = repos.reduce( (prev,next) => prev + next.stargazers_count, 0);
		most_starred_repo = repos.reduce( (prev, next) =>  prev.stargazers_count > next.stargazers_count ? prev : next ); 
	console.log(most_starred_repo);
	}

	return ( repos ? 
		<div className='DisplayRepos'>
			<ValidatedField fieldName="Stargazers" value={stargazers_total}/>
			<ValidatedField fieldName="Most Starred Repo" value={most_starred_repo.name}/>
		</div>
		: null
	);
}

export default displayRepos;