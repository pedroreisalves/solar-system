import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

export default class SolarSystem extends Component {
  render() {
    const planetDiv = (name, image) => (<PlanetCard
      key={ name }
      planetName={ name }
      planetImage={ image }
    />);

    return (
      <div className="solar-system" data-testid="solar-system">
        <Title headline="Planets" />
        <div className="planets-container">
          {planets.map(({ name, image }) => planetDiv(name, image))}
        </div>
      </div>
    );
  }
}
