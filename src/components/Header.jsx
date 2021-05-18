import React from 'react';

import logo from '../images/logo.png';
import githubMark from '../images/github.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div id='logo'>
          <img src={logo} alt='Logo' />
          <span className='golden'>Break</span>
          <span>Time!</span>
        </div>
        <img src={githubMark} alt='GitHub' />
      </header>
    );
  }
}

export default Header;
