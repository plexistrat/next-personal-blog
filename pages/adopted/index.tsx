import React from 'react';
import AnimalCards from '@/components/AnimalsCard/AnimalsCard';

type Props = {};

const Adoption = (props: Props) => {
  return (
    <div>
      <h1>Υιοθεσίες</h1>
      <AnimalCards />
    </div>
  );
};

export default Adoption;
