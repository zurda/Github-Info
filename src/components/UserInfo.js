import React, { Component } from 'react';
import { node } from 'prop-types';

class UserInfo extends Component {

	constructor(props) {
		super(props);

		this.state = {
			fadeState: 'fadeOut',
		};
	}

	changeFadeState(state){
		// delay required for browsers to run animation
		const ANIMATION_TIMEOUT = 50;

		setTimeout(() => {
			this.setState({fadeState: state})
		}, ANIMATION_TIMEOUT);
	}

	componentDidMount() {
		this.changeFadeState('fadeIn');
	}

	shouldComponentUpdate(nextProps, nextState) {
		//if user info will change fade out
		if (this.props.children[0].props.user.login !== nextProps.children[0].props.user.login) {
			this.setState({fadeState: 'fadeOut'});
		}
		return true;
	}

	componentDidUpdate(prevProps) {
		//if user info changed start fading in
		if (this.props.children[0].props.user.login !== prevProps.children[0].props.user.login) {
			this.changeFadeState('fadeIn');
		}
	}
 
	render() {
		const children = this.props.children;
		return <div className={`UserInfo ${this.state.fadeState}`} >
					{children}
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