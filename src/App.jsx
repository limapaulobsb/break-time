import React from 'react';

import Header from './components/Header';
import Timer from './components/Timer';
import AudioPlayer from './components/AudioPlayer';
import Modal from './components/Modal';

import coffeeCup from './images/coffeeCup.jpeg';

// import coffeeImg from './images/coffee.jpeg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  render() {
    return (
      <div>
        <Header />
        <main>
          <Timer showModal={this.toggleModal} />
          <AudioPlayer />
        </main>
        <div className='radial-gradient' />
        <div id='coffee-ctn'>
          <img src={coffeeCup} alt='Coffee Cup' />
        </div>
        {this.state.showModal && <Modal onClick={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
