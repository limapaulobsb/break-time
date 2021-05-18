import React from 'react';

import ProgressRing from './ProgressRing';
import NumPad from './NumPad';

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      isRunning: false,
      minutes: 0,
      minutesLeft: 0,
      seconds: 0,
      secondsLeft: 0,
    };
  }

  refreshTimer = () => {
    let { minutesLeft, secondsLeft } = this.state;

    if (secondsLeft > 0) {
      secondsLeft--;
    } else {
      secondsLeft = 59;
      minutesLeft--;
    }
    this.setState({ minutesLeft, secondsLeft });
  };

  startTimer = () => {
    if (this.state.minutesLeft !== 0 || this.state.secondsLeft !== 0) {
      this.setState({ isRunning: true });
      this.timerInterval = setInterval(() => {
        this.refreshTimer();
      }, 1000);
    }
  };

  stopTimer = () => {
    this.setState({ isRunning: false });
    clearInterval(this.timerInterval);
  };

  resetHandler = () => {
    this.stopTimer();
    this.setState((prevState) => ({
      minutesLeft: prevState.minutes,
      secondsLeft: prevState.seconds,
    }));
  };

  setTimer = (param) => {
    const { isRunning } = this.state;

    if (!isRunning) {
      let timer =
        this.state.minutesLeft.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
        }) +
        this.state.secondsLeft.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
        });

      if (param === 'backspace') {
        timer = 0 + timer[0] + timer[1] + timer[2];
      } else if (param === 'clear') {
        timer = '0000';
      } else {
        timer = timer[1] + timer[2] + timer[3] + param;
      }

      const minutes = parseInt(timer[0] + timer[1]);
      const seconds = parseInt(timer[2] + timer[3]);

      this.setState({
        minutes,
        seconds,
        minutesLeft: minutes,
        secondsLeft: seconds,
      });
    }
  };

  componentDidUpdate(_prevProps, prevState) {
    if (
      prevState.isRunning &&
      prevState.minutesLeft === 0 &&
      prevState.secondsLeft === 1
    ) {
      this.stopTimer();
      this.props.showModal();
    }
  }

  render() {
    let { isRunning, minutes, minutesLeft, seconds, secondsLeft } = this.state;
    const progress =
      (minutesLeft * 60 + secondsLeft) / (minutes * 60 + seconds);
    minutesLeft = this.state.minutesLeft.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    });
    secondsLeft = this.state.secondsLeft.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    });

    return (
      <div id='timer'>
        <div id='countdown'>
          <span id='time-left'>
            {minutesLeft}:{secondsLeft}
          </span>
          <ProgressRing
            radius={120}
            stroke={12}
            progress={progress ? progress : 0}
          />
        </div>
        <NumPad isRunning={isRunning ? true : false} onClick={this.setTimer} />
        <div id='buttons-ctn'>
          <button onClick={isRunning ? this.stopTimer : this.startTimer}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button onClick={this.resetHandler}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;
