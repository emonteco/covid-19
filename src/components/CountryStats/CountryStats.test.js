import React from 'react';
import { shallow } from 'enzyme';
import { useSelector, useDispatch } from 'react-redux';

import CountryStats from './index';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('CountryStats component', () => {
  let component;
  const mockedDispatch = jest.fn();
  useSelector.mockImplementation((selector) => selector({
    countries: {
      list: [
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
      selected: 'AR',
    },
    stats: {
      country: {
        confirmed: {
          value: 999,
        },
        recovered: {
          value: 111,
        },
        deaths: {
          value: 222,
        },
        lastUpdate: '2020-04-01T12:00:00.000Z',
      },
      loadingCountryStats: false,
    },
  }));
  useDispatch.mockReturnValue(mockedDispatch);

  beforeEach(() => {
    component = shallow(<CountryStats />);
  });

  it('renders a Card component correctly', () => {
    expect(component.find('.country-stats').length).toEqual(1);
    expect(component.find('.country-stats WorldMap').length).toEqual(1);
    expect(component.find('.country-stats Country').length).toEqual(1);
    expect(component.find('.country-stats Stats').length).toEqual(1);
  });

  it('dispatches the selectCountry action when selecting a country', () => {
    component.find('Country').simulate('change', { target: { value: 'AR' } });
    expect(mockedDispatch).toHaveBeenCalled();
  });
});
