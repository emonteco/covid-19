import React from 'react';
import { shallow } from 'enzyme';

import Card from './index';

describe('Card component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      title: 'Title',
      number: '123456',
      percentage: '10%',
      color: 'primary',
      loading: false,
    };
    component = shallow(<Card {...props} />);
  });

  it('renders a Card component correctly', () => {
    expect(component.find('.card').length).toEqual(1);
  });

  it('shows a spinner when loading data', () => {
    expect(component.find('.spinner-border').length).toEqual(0);
    component.setProps({
      loading: true,
    });
    expect(component.find('.spinner-border').length).toEqual(1);
  });
});
