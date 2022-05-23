import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

export default class Missions extends Component {
  render() {
    const missionDiv = ({ name, year, country, destination }) => (<MissionCard
      name={ name }
      year={ year }
      country={ country }
      destination={ destination }
      key={ name }
    />);
    return (
      <div className="missions" data-testid="missions">
        <Title headline="Missions" />
        <div className="missions-container">
          {missions.map((mission) => missionDiv(mission))}
        </div>
      </div>
    );
  }
}
