import React from 'react';
import { shallow } from 'enzyme';

import WorldMap from './index';

describe('WorldMap component', () => {
  const props = {
    selected: 'AR',
    onClick: jest.fn(),
  };
  const component = shallow(<WorldMap {...props} />);

  it('renders the WorldMap component correctly', () => {
    expect(component.find('.world-map').length).toEqual(1);
  });
});
