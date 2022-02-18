import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
          {planets.map((element) => (
            <PlanetCard
              key={ element.name }
              planetName={ element.name }
              planetImage={ element.image }
            />
          ))}
        </div>
      </div>
    );
  }
}
export default SolarSystem;
