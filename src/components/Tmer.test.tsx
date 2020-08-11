import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('App', () => {
  it('should render a <div />', () => {
    const container = shallow(<Timer />);
    expect(container.find('div').length).toEqual(3);
  });
});

describe('Button', () => {
  it('should render start and pause', () => {
    const container = shallow(<Timer />);
    expect(container.find('button').render)
  });
});

