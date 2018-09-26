import React from 'react';
import {addCommas} from './DisplayUser';


const DisplayLanguages = (props) => {
	let topLang;
	if (props.topLang) {
		topLang = addCommas(props.topLang.toString());
	}
	return (
		<div className='DisplayRepos'>
			<p>Top Languages: {props.topLang}</p>
		</div>
	);
}

export default DisplayLanguages;