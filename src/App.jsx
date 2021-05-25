import React from 'react';

import Header from './components/Header';
import Timer from './components/Timer';
import AudioPlayer from './components/AudioPlayer';
import Modal from './components/Modal';
import './App.css';

import coffeeCup from './images/coffeeCup.jpg';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <Timer showModal={this.toggleModal} />
          <AudioPlayer />
        </main>
        <div id='coffee-ctn'>
          <img src={coffeeCup} alt='Coffee Cup' />
        </div>
        {this.state.showModal && <Modal onClick={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
