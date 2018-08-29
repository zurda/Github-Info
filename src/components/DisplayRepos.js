import React from 'react';

const displayRepos = ({ repos }) => {
	let stargazers_total =0, 
	most_starred = 0, 
	most_forked = 0;
	if (!repos) {
		return null;
	} else {
		if (repos.stargazers_count > 0) {
			stargazers_total = repos.reduce( (prev,next) => prev + next.stargazers_count, 0);
			most_starred = repos.reduce( (prev, next) =>  prev.stargazers_count > next.stargazers_count ? prev : next ); 
		if (repos.forks_count > 0) {
			most_forked = repos.reduce( (prev, next) =>  prev.forks_count > next.forks_count ? prev : next );
		}
	}
	}

	
	return (
		<div className='DisplayRepos'>
			<p>Stargazers: {stargazers_total}</p>
			{
				most_starred &&
				<p>
					Most Starred Repo:
					<a href={most_starred.html_url} target="_BLANK">{most_starred.name}</a>
				</p>
			}
			{
				most_forked &&
				<p>
					Most Forked Repo:
					<a href={most_forked.html_url} target="_BLANK">{most_forked.name}</a>
				</p>
			}
		</div>
	);
}

export default displayRepos;