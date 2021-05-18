import React from 'react';

import playSvg from '../svg/play.svg';
import pauseSvg from '../svg/pause.svg';
import stopSvg from '../svg/stop.svg';
import previousSvg from '../svg/previous.svg';
import nextSvg from '../svg/next.svg';

import relaxing1 from '../audio/relaxing1.wav';
import relaxing2 from '../audio/relaxing2.wav';
import relaxing3 from '../audio/relaxing3.wav';
import house1 from '../audio/house1.wav';
import house2 from '../audio/house2.wav';
import house3 from '../audio/house3.wav';

class AudioPlayer extends React.Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false,
      index: 0,
    };

    this.audio = [
      ['Relaxing 1', new Audio(relaxing1)],
      ['Relaxing 2', new Audio(relaxing2)],
      ['Relaxing 3', new Audio(relaxing3)],
      ['House 1', new Audio(house1)],
      ['House 2', new Audio(house2)],
      ['House 3', new Audio(house3)],
    ];

    for (const audio of this.audio) {
      audio[1].loop = true;
      audio[1].volume = 0.5;
    }
  }

  togglePlay = () => {
    const { isPlaying, index } = this.state;
    if (isPlaying) {
      this.audio[index][1].pause();
    } else {
      this.audio[index][1].play();
    }
    this.setState({ isPlaying: !isPlaying });
  };

  stopAudio = () => {
    const { isPlaying, index } = this.state;
    if (isPlaying) {
      this.audio[index][1].pause();
      this.audio[index][1].currentTime = 0;
      this.setState({ isPlaying: false });
    }
  };

  previousAudio = () => {
    let { isPlaying, index } = this.state;
    if (isPlaying) {
      this.audio[index][1].pause();
    }
    this.audio[index][1].currentTime = 0;
    if (index === 0) {
      index = this.audio.length - 1;
    } else {
      index--;
    }
    this.setState({ index });
    if (isPlaying) {
      this.audio[index][1].play();
    }
  };

  nextAudio = () => {
    let { isPlaying, index } = this.state;
    if (isPlaying) {
      this.audio[index][1].pause();
    }
    this.audio[index][1].currentTime = 0;
    if (index === this.audio.length - 1) {
      index = 0;
    } else {
      index++;
    }
    this.setState({ index });
    if (isPlaying) {
      this.audio[index][1].play();
    }
  };

  render() {
    const { isPlaying, index } = this.state;
    return (
      <div id='audio-player'>
        <span>Ambient sound</span>
        <div id='player-controls'>
          <div>
            <img
              src={isPlaying ? pauseSvg : playSvg}
              alt='Play/Pause audio'
              onClick={this.togglePlay}
            />
            <img src={stopSvg} alt='Stop audio' onClick={this.stopAudio} />
          </div>
          <div>
            <img
              src={previousSvg}
              alt='Previous audio'
              onClick={this.previousAudio}
            />
            <img src={nextSvg} alt='Next audio' onClick={this.nextAudio} />
          </div>
        </div>
        <span id='soundtrack'>Soundtrack: {this.audio[index][0]}</span>
      </div>
    );
  }
}

export default AudioPlayer;
