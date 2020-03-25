import React from 'react';
import PropTypes from 'prop-types';
import { VectorMap } from '@south-paw/react-vector-maps';

import world from '../../maps/world.json';

const WorldMap = ({ onClick, selected }) => {
  const currentLayers = [selected && selected.toLowerCase()];
  const layerProps = {
    onClick: ({ target }) => onClick(target.attributes.id.value.toUpperCase()),
  };

  return (
    <VectorMap
      {...world}
      layerProps={layerProps}
      currentLayers={currentLayers}
      tabIndex={-1}
    />
  );
};

WorldMap.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.string,
};

WorldMap.defaultProps = {
  selected: null,
};

export default WorldMap;
