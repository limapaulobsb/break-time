import React from 'react';

import backspaceSvg from '../svg/backspace.svg';
import clearSvg from '../svg/clear.svg';

class NumPad extends React.Component {
  render() {
    const { isRunning, onClick: setTimer } = this.props;

    return (
        <div className='table'>
          <div className='table-row'>
            <div
              className={isRunning ? 'num-pad off' : 'num-pad'}
              onClick={() => setTimer(7)}
            >
              7
            </div>
            <div
              className={isRunning ? 'num-pad off' : 'num-pad'}
              onClick={() => setTimer(8)}
            >
              8
            </div>
            <div
              className={isRunning ? 'num-pad off' : 'num-pad'}
              onClick={() => setTimer(9)}
            >
              9
            </div>
          </div>
          <div className='table-row'>
            <div
              className={isRunning ? 'num-pad off' : 'num-pad'}
              onClick={() => setTimer(4)}
            >
              4
            </div>
            <div
              className={isRunning ? 'num-pad off' : 'num-pad'}
              onClick={() => setTimer(5)}
            >
              5
            </div>
            <div
              className={isRunning ? 'num-pad off' : 'num-pad'}
              onClick={() => setTimer(6)}
            >
              6
            </div>
          </div>
          <div className='table-row'>
            <div
              className={isRunning ? 'num-pad off' : 'num-pad'}
              onClick={() => setTimer(1)}
            >
              1
            </div>
            <div
              className={isRunning ? 'num-pad off' : 'num-pad'}
              onClick={() => setTimer(2)}
            >
              2
            </div>
            <div
              className={isRunning ? 'num-pad off' : 'num-pad'}
              onClick={() => setTimer(3)}
            >
              3
            </div>
          </div>
          <div className='table-row'>
            <div
              className={isRunning ? 'control-pad off' : 'control-pad'}
              onClick={() => setTimer('backspace')}
            >
              <img className='control-btn' src={backspaceSvg} alt='Backspace' />
            </div>
            <div
              className={isRunning ? 'num-pad off' : 'num-pad'}
              onClick={() => setTimer(0)}
            >
              0
            </div>
            <div
              className={isRunning ? 'control-pad off' : 'control-pad'}
              onClick={() => setTimer('clear')}
            >
              <img className='control-btn' src={clearSvg} alt='Clear' />
            </div>
          </div>
        </div>
    );
  }
}

export default NumPad;
