import React from 'react';
import { shallow } from 'enzyme';
import { useSelector, useDispatch } from 'react-redux';

import WorldStats from './index';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('WorldStats component', () => {
  const mockedDispatch = jest.fn();
  useSelector.mockImplementation((selector) => selector({
    stats: {
      world: {
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
      loadingWorldStats: false,
    },
  }));
  useDispatch.mockReturnValue(mockedDispatch);
  const component = shallow(<WorldStats />);

  it('renders the WorldStats component correctly', () => {
    expect(component.find('.world-stats').length).toEqual(1);
  });
});
