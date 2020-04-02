import React from 'react';
import { mount } from 'enzyme';

import ThemeButton from './index';

describe('ThemeButton component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      darkTheme: false,
      onClick: jest.fn(),
    };
    component = mount(<ThemeButton {...props} />);
  });

  it('toggles the icon when changing dark mode', () => {
    expect(component.find('.theme-button svg#dark-mode').length).toEqual(1);
    component.setProps({
      darkTheme: true,
    });
    expect(component.find('.theme-button svg#light-mode').length).toEqual(1);
  });

  it('calls the onClick function when clicking the button', () => {
    component.find('button').simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});
