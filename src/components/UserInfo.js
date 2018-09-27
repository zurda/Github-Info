import React, { Component } from 'react';
import { node, bool, func } from 'prop-types';

class UserInfo extends Component {

	constructor(props) {
		super(props);

		this.state = {
			fadeState: 'fadeOut',
			alreadyDisplayed: false
		};
	}

	setFadeState(state){
		// delay required for browsers to run animation
		const ANIMATION_TIMEOUT = 50;

		setTimeout(() => {
			this.setState({fadeState: state})
		}, ANIMATION_TIMEOUT);
	}

	

	shouldComponentUpdate(nextProps, nextState) {
		//if user info will change fade out
		if (this.props.children[0].props.user.login !== nextProps.children[0].props.user.login) {
			this.setState({fadeState: 'fadeOut'});
		} else if(nextProps.alreadyDisplayed){
			this.props.handleAlreadyDisplayed();
			this.showDisplayed();
		}
		return true;
	}
	
	showDisplayed(){
		this.setState({
			alreadyDisplayed: true,
		});

		setTimeout(()=>{
			this.setState({
				alreadyDisplayed: false,
			});
		},400);
	}
	
	render() {
		
		// once the profile image has loaded start to fade in
		const handleOnLoad = () => this.setFadeState('fadeIn');
		let userChild = this.props.children[0];
		userChild = React.cloneElement(userChild, {handleOnLoad: handleOnLoad.bind(this)});
		const reposChild = this.props.children[1];
		
		const showDisplayed = this.state.alreadyDisplayed ? 'alreadyDisplayed' : '';
		
		return (
			<div className={`UserInfo ${this.state.fadeState} ${showDisplayed}`} >
				{userChild}
				{reposChild}
			</div>
		);
	}
}

UserInfo.defaultProps = {
	children: null,
};

UserInfo.propTypes = {
	children: node,
	alreadyDisplayed: bool,
	handleAlreadyDisplayed: func,
};

export default UserInfo;