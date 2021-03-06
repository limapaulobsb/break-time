import React from 'react';
import PropTypes from 'prop-types';

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

    this.refreshTimer = this.refreshTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.setTimer = this.setTimer.bind(this);
  }

  refreshTimer() {
    let { minutesLeft, secondsLeft } = this.state;

    if (secondsLeft > 0) {
      secondsLeft--;
    } else {
      secondsLeft = 59;
      minutesLeft--;
    }
    this.setState({ minutesLeft, secondsLeft });
  }

  startTimer() {
    if (this.state.minutesLeft !== 0 || this.state.secondsLeft !== 0) {
      this.setState({ isRunning: true });
      this.timerInterval = setInterval(() => {
        this.refreshTimer();
      }, 1000);
    }
  }

  pauseTimer() {
    this.setState({ isRunning: false });
    clearInterval(this.timerInterval);
  }

  resetTimer() {
    this.pauseTimer();
    this.setState((prevState) => ({
      minutesLeft: prevState.minutes,
      secondsLeft: prevState.seconds,
    }));
  }

  setTimer(param) {
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
  }

  componentDidUpdate(_prevProps, prevState) {
    if (
      prevState.isRunning &&
      prevState.minutesLeft === 0 &&
      prevState.secondsLeft === 1
    ) {
      this.pauseTimer();
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
        <NumPad isRunning={isRunning ? true : false} setTimer={this.setTimer} />
        <div id='buttons-ctn'>
          <button onClick={isRunning ? this.pauseTimer : this.startTimer}>
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    );
  }
}

Timer.propTypes = {
  showModal: PropTypes.func,
}.isRequired;

export default Timer;
