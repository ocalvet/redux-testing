import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme'
import {App, mapDispatchToProps} from './App';
import { increaseCounter, decreaseCounter } from './redux';

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
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.App').length).toBe(1);
  });

  it('should increase counter', () => {
    const onButtonClick = jest.fn();
    const wrapper = shallow(<App onIncreaseCounter={onButtonClick} />);
    wrapper.find('button').at(0).simulate('click');
    expect(onButtonClick).toHaveBeenCalled();
  });

  it('should decrease counter', () => {
    const onButtonClick = jest.fn();
    const wrapper = shallow(<App onDecreaseCounter={onButtonClick} />);
    wrapper.find('button').at(1).simulate('click');
    expect(onButtonClick).toHaveBeenCalled();
  });

  it('should show the correct count', () => {
    const wrapper = shallow(<App count={11} />);
    expect(wrapper.find('.title').text()).toEqual('Counter (11)');
  });


  it('should have a increase button', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('button').at(0).text()).toBe('Increase');
  });

  it('should have a decrease button', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('button').at(1).text()).toBe('Decrease');
  });

  it('should call the dispatch function with increase counter', () => {
    const mockDispatch = jest.fn();
    const props = mapDispatchToProps(mockDispatch);
    props.onIncreaseCounter();
    expect(mockDispatch).toHaveBeenCalledWith(increaseCounter);
  });

  it('should call the dispatch function with decrease counter', () => {
    const mockDispatch = jest.fn();
    const props = mapDispatchToProps(mockDispatch);
    props.onDecreaseCounter();
    expect(mockDispatch).toHaveBeenCalledWith(decreaseCounter);
  });
});