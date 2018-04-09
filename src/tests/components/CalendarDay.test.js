import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import CalendarDay from '../../components/CalendarDay';

let wrapper, date, handleClick;

beforeEach(() => {
    date = moment();
    handleClick = jest.fn();
    wrapper = shallow(<CalendarDay
        date={date}
        handleClick={handleClick}
    />);

})
test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
test('should render correctly with text date value', () => {
    wrapper.setProps({
        date:'Thu'
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle click', () => {
    const div = wrapper.find('div.day');
    expect(div).toHaveLength(1);
    div.at(0).simulate('click');

    expect(handleClick).toHaveBeenLastCalledWith(moment())
});

test('should render correctly with given className', () => {
    wrapper.setProps({
        className:'my-class'
    })
    expect(wrapper).toMatchSnapshot();
});
