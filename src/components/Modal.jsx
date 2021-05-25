import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    return (
      <div>
        <div className='backdrop' onClick={this.props.onClick} />
        <div className='modal'>
          <p>Break time is over!</p>
          <button onClick={this.props.onClick}>
            Ok! Let&apos;s get to work!
          </button>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default Modal;
