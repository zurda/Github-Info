import React, { Component } from 'react';
import { node } from 'prop-types';

class UserInfo extends Component {

	constructor(props) {
		super(props);

		this.state = {
			fadeState: 'fadeOut',
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
		}
		return true;
	}

	render() {
		// once the profile image has loaded start to fade in
		const handleOnLoad = () => this.setFadeState('fadeIn');
		let userChild = this.props.children[0];
		userChild = React.cloneElement(userChild, {handleOnLoad: handleOnLoad.bind(this)});
		const reposChild = this.props.children[1];
		
		return <div className={`UserInfo ${this.state.fadeState}`} >
					{userChild}
					{reposChild}
				</div>;
	}
}

UserInfo.defaultProps = {
	children: null,
};

UserInfo.propTypes = {
	children: node,
};

export default UserInfo;