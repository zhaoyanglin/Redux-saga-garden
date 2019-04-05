import React from 'react';
import NewPlantForm from '../NewPlantForm/NewPlantForm';
import PlantList from '../PlantList/PlantList';

const Garden = props => (
  <div>
    <h2></h2>
    {/* Redux State isn't needed in the garden, it is just a parent component */}
    {/* Thanks to redux, there is no need to pass along props! */}
    <NewPlantForm />
    <PlantList />
  </div>
);

export default Garden;
