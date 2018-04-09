import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import CalendarWidget from '../../components/CalendarWidget';


let wrapper, today, current;
beforeEach(() => {
    today = moment('19790613');
    current = moment();
    wrapper = shallow(<CalendarWidget
        todayDate={today}
        currentMonth={current}
    />);
})


test('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should call an action when clicked on today title', () => {

    wrapper.instance().today = jest.fn();
    wrapper.update();
    const todayTitle = wrapper.find('.today');
    expect(todayTitle).toHaveLength(1);
    todayTitle.at(0).simulate('click');
    expect(wrapper.instance().today).toBeCalled();
});