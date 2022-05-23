import React, { Component } from 'react';
import Illustration from '../images/undraw_launch_day_4e04.svg';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <h1>Solar System</h1>
          <p>
            Let
            <span>&#39;</span>
            s know about the planets in our solar system?
            And the missions performed on it?
          </p>
        </div>
        <div className="img-container">
          <img className="header-illustration" src={ Illustration } alt="Illustration" />
        </div>
      </header>
    );
  }
}
