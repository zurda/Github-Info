import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlashMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateTypes: {
        success: 'message-success',
        error: 'message-error',
        warning: 'message-warning',
        info: 'message-info',
      },
    };
  }

  render() {
    const { children, type } = this.props;
    const { stateTypes: { [type]: classType } } = this.state;

    return (
      <div className={`flash-message ${classType}`}>
        <strong>{children}</strong>
      </div>
    );
  }
}

FlashMessage.defaultProps = {
  children: null,
  type: '',
};

FlashMessage.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default FlashMessage;
