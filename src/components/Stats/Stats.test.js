import React from 'react';
import { shallow } from 'enzyme';

import Stats from './index';

describe('Stats component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      confirmed: 999,
      recovered: 111,
      deaths: 222,
      lastUpdate: '2020-04-01T12:00:00.000Z',
      loading: false,
      verticalLayout: false,
    };
    component = shallow(<Stats {...props} />);
  });

  it('renders a Stats component correctly', () => {
    expect(component.find('.world-stats').length).toEqual(1);
    expect(component.find('.world-stats Card').length).toEqual(3);
    expect(component.find('.row .col-sm-12.col-md-4.mb-2').length).toEqual(3);
  });

  it('modifies the container classes for vertical layout', () => {
    expect(component.find('.row .col-sm-12.col-md-4.mb-2').length).toEqual(3);
    component.setProps({
      verticalLayout: true,
    });
    expect(component.find('.row .col-sm-12.mb-2').length).toEqual(3);
  });

  it('shows a dash symbol if there is no last update data', () => {
    component.setProps({
      lastUpdate: null,
    });
    expect(component.find('.world-stats .text-muted').text()).toEqual('Last update: -');
  });
});
