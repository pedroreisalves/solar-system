import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const alternativeText = `Planeta ${planetName}`;
    return (
      <div className="planet-card" data-testid="planet-card">
        <img src={ planetImage } alt={ alternativeText } />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
