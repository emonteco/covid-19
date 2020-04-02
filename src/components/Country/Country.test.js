import React from 'react';
import { shallow } from 'enzyme';

import Country from './index';

describe('Country component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      countries: [
        {
          iso2: 'AR',
          name: 'Argentina',
        },
        {
          iso2: 'BR',
          name: 'Brazil',
        },
        {
          iso2: 'CL',
          name: 'Chile',
        },
      ],
      selected: null,
      onChange: jest.fn(),
    };
    component = shallow(<Country {...props} />);
  });

  it('renders a Card component correctly', () => {
    expect(component.find('.country').length).toEqual(1);
    expect(component.find('.country select').length).toEqual(1);
    expect(component.find('.country select option').length).toEqual(4);
  });

  it('calls the onChange function when selecting a country', () => {
    component.find('select').simulate('change', { target: { value: props.countries[0].iso2 } });
    expect(props.onChange).toHaveBeenCalledWith(props.countries[0].iso2);
  });
});
