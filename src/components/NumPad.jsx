import React from 'react';
import PropTypes from 'prop-types';

import backspaceSvg from '../svg/backspace.svg';
import clearSvg from '../svg/clear.svg';

class NumPad extends React.Component {
  renderNumpadButton(num) {
    const { isRunning, setTimer } = this.props;
    return (
      <div
        className={isRunning ? 'numpad off' : 'numpad'}
        onClick={() => setTimer(num)}
      >
        {num}
      </div>
    );
  }

  render() {
    const { isRunning, setTimer } = this.props;

    return (
      <div className='table'>
        <div className='table-row'>
          {this.renderNumpadButton(7)}
          {this.renderNumpadButton(8)}
          {this.renderNumpadButton(9)}
        </div>
        <div className='table-row'>
          {this.renderNumpadButton(4)}
          {this.renderNumpadButton(5)}
          {this.renderNumpadButton(6)}
        </div>
        <div className='table-row'>
          {this.renderNumpadButton(1)}
          {this.renderNumpadButton(2)}
          {this.renderNumpadButton(3)}
        </div>
        <div className='table-row'>
          <div
            className={isRunning ? 'controlpad off' : 'controlpad'}
            onClick={() => setTimer('backspace')}
          >
            <img src={backspaceSvg} alt='Backspace Button' />
          </div>
          {this.renderNumpadButton(0)}
          <div
            className={isRunning ? 'controlpad off' : 'controlpad'}
            onClick={() => setTimer('clear')}
          >
            <img src={clearSvg} alt='Clear Button' />
          </div>
        </div>
      </div>
    );
  }
}

NumPad.propTypes = {
  isRunning: PropTypes.bool,
  setTimer: PropTypes.func,
}.isRequired;

export default NumPad;
