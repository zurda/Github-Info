import React, { Component } from 'react';
import { node, string } from 'prop-types';

class FlashMessage extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      stateTypes: {
        success: "message-success",
        error: "message-error",
        warning: "message-warning",
        info: "message-info",
      }
    };

  }

  render() {
    const children = this.props.children;
    const inputType = this.props.type;
    const classType = this.state.stateTypes[inputType];
    
    return <div className={`flash-message ${classType}`} key={this.props.children} >
            {children}
          </div>;
  }
}

FlashMessage.defaultProps = {
  children: null,
  type: ""
};

FlashMessage.propTypes = {
  children: node,
  type: string
};

export default FlashMessage;