// Made with the help of this awesome tutorial
// https://css-tricks.com/building-progress-ring-quickly/

import React from 'react';
import PropTypes from 'prop-types';

class ProgressRing extends React.Component {
  constructor(props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke / 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {
    const { radius, stroke, progress } = this.props;
    const strokeDashoffset = this.circumference - progress * this.circumference;

    return (
      <svg height={radius * 2} width={radius * 2}>
        <circle
          r={this.normalizedRadius}
          cx={radius}
          cy={radius}
          strokeWidth={stroke}
          strokeDasharray={this.circumference + ' ' + this.circumference}
          strokeDashoffset={strokeDashoffset}
        />
        <circle
          r={this.normalizedRadius}
          cx={radius}
          cy={radius}
          strokeWidth={stroke}
        />
      </svg>
    );
  }
}

ProgressRing.propTypes = {
  radius: PropTypes.number,
  stroke: PropTypes.number,
  progress: PropTypes.number,
}.isRequired;

export default ProgressRing;
