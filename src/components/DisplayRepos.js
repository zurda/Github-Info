import React from 'react';
import {addCommas} from './DisplayUser';

const displayRepos = ({ repos }) => {
	let stargazers_total, 
	forks_total,
	most_starred, 
	most_forked;
	if (!repos) {
		return null;
	} else {
		stargazers_total = repos.reduce( (prev,next) => prev + next.stargazers_count, 0);
		forks_total = repos.reduce( (prev,next) => prev + next.forks_count, 0);
		if (stargazers_total > 0) {
			most_starred = repos.reduce( (prev, next) =>  prev.stargazers_count > next.stargazers_count ? prev : next ); 
		}
		if (forks_total > 0) {
			most_forked = repos.reduce( (prev, next) =>  prev.forks_count > next.forks_count ? prev : next );
		}
	}
	
	return (
		<div className='DisplayRepos'>
			<p>Stargazers: {addCommas(stargazers_total.toString())}</p>
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