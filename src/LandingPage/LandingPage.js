import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import check from './check.png'

class LandingPage extends Component {
  render() {
    return (

      <div className="landingpage">
        <p>This is an app for you to add, edit, delete your day to day to do items.</p><br />
        <p>There is no ad or complicated functions to distract yourself.</p><br />
        <p>Simple but functional.</p><br />
        <p>  Click here: <button><Link to="/home"><img src={ check } alt='check button'/></Link></button> to get started!</p>
      </div>

    );
  }
}

export default LandingPage;
