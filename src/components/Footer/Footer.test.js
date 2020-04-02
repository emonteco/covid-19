import React from 'react';
import { shallow } from 'enzyme';

import Footer from './index';

describe('Footer component', () => {
  const component = shallow(<Footer />);

  it('renders a Footer component correctly', () => {
    expect(component.find('footer').length).toEqual(1);
    expect(component.find('footer a').length).toEqual(2);
  });
});
