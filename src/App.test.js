import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme'
import {App} from './App';

const setup = () => {
  const props = {
    onIncreaseCounter: jest.fn(),
    onDecreaseCounter: jest.fn()
  }

  const enzymeWrapper = mount(<App {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have an element with the .App class', () => {
    const { enzymeWrapper, props } = setup();
    expect(enzymeWrapper.find('.App').length).toBe(1);
  });

  it('should increase counter', () => {
    const onButtonClick = jest.fn();
    const wrapper = shallow(<App onIncreaseCounter={onButtonClick} />);
    console.debug(wrapper.find('button'));
    wrapper.find('button').at(0).simulate('click');
    expect(onButtonClick).toHaveBeenCalled();
  });
});