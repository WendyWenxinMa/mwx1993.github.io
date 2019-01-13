import React, { Component } from 'react';
import avatar from './avatar.png';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActivateExpansion: false
    };

    this.handleClickAvatar = this.handleClickAvatar.bind(this);
  }

  handleClickAvatar() {
    this.setState(state => ({
      isActivateExpansion: !this.state.isActivateExpansion
    }));
  }

  render() {
    const avatarStyle = this.state.isActivateExpansion ? 'avatar avatar-side' : 'avatar';
    const introCardStyle = this.state.isActivateExpansion ? 'App intro-card-side' : 'App';
    return (
      <div className={introCardStyle}>
        <header className="App-header">
          <button onClick={this.handleClickAvatar} className={avatarStyle}>
            <img src={avatar} alt="avatar" />
          </button>
          
          
          <p>
            Hello, I'm Wendy.
          </p>

          {this.state.isActivateExpansion ?
            <p>isActivateExpansion is true!!!</p>
            : null
          }

          <a
            className="App-link btn-5"
            href="mailto:mawenxin52@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </header>
      </div>
    );
  }
}

export default App;
