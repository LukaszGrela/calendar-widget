import React from 'react';
import { shallow } from 'enzyme'
import CalendarNavigation from '../../components/CalendarNavigation';

let wrapper, navigateUp, navigateDown;

beforeEach(() => {
    navigateUp = jest.fn();
    navigateDown = jest.fn();
    wrapper = shallow(<CalendarNavigation
        navigateDown={navigateDown}
        navigateUp={navigateUp}
    />);
});

test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly with given className', () => {
    wrapper.setProps({
        className: 'my-class'
    })
    expect(wrapper).toMatchSnapshot();
});


test('should call navigateUp', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(navigateUp).toHaveBeenCalled();
});

test('should call navigateDown', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(navigateDown).toHaveBeenCalled();
});