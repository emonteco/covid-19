import React from 'react';
import { shallow } from 'enzyme';
import { useSelector, useDispatch } from 'react-redux';

import Header from './index';
import { toggleTheme } from '../../redux/theme/actions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Header component', () => {
  const mockedDispatch = jest.fn();
  useSelector.mockImplementation((selector) => selector({
    theme: {
      darkTheme: false,
    },
  }));
  useDispatch.mockReturnValue(mockedDispatch);
  const component = shallow(<Header />);

  it('renders a Header component correctly', () => {
    expect(component.find('header').length).toEqual(1);
    expect(component.find('header h1').length).toEqual(1);
    expect(component.find('header h1').text()).toEqual('COVID-19');
    expect(component.find('header ThemeButton').length).toEqual(1);
  });

  it('dispatches the toggleTheme action when clicking the button', () => {
    component.find('ThemeButton').simulate('click');
    expect(mockedDispatch).toBeCalledWith(toggleTheme());
  });
});
