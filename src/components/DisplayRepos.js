import React from 'react';
import ValidatedField from './ValidatedField';

const displayRepos = ({ repos }) => {
	return (
		<div className='DisplayRepos'>
			<ValidatedField fieldName="Star Count" value={repos.length}/>
		</div>
	);
}

export default displayRepos;