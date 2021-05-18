import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <div>
        <div className='backdrop' onClick={this.props.onClick} />
        <div className='modal'>
          <p>Break time is over!</p>
          <button onClick={this.props.onClick}>
            Ok! Let's get to work!
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
