import React from 'react';

import FlashMessage from './FlashMessage';
import UserInfo from './UserInfo';
import DisplayUser from './DisplayUser';
import DisplayRepos from './DisplayRepos';

const Content = (props) => {
	let userInfo;
	if(props.isInvalid) {
		// Show a message when the username is invalid
		userInfo =	<FlashMessage type="error">Invalid username</FlashMessage>;
	} else if(!props.isFound){
		// Show a message when the username is not found
		userInfo =	<FlashMessage type="error">Username not found</FlashMessage>;	
	} else {
		if(!(props.user || props.repos )){
			userInfo = <FlashMessage type="info">Loading...</FlashMessage>;
		} else {
			userInfo = <UserInfo>
							<DisplayUser user={props.user} />
							<DisplayRepos repos={props.repos} topLang={props.topLang} />
						</UserInfo>
		}
	}
	
	return (
		<div>{userInfo}</div>
	);
}

export default Content;