import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import CalendarRow from '../../components/CalendarRow';
import { calendarDates } from '../../utils/helpers';

let wrapper, days, now, current;
beforeEach(() => {
    now = moment();
    current = moment().add(1, 'days');
    days = calendarDates(now);
    wrapper = shallow(<CalendarRow
        days={days[0]}
    />)
})
test('should render correctly', () => {
    // labels
    expect(wrapper).toMatchSnapshot();
});
test('should render correctly week labels', () => {
    wrapper.setProps({
        days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
    });
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly with given className', () => {
    wrapper.setProps({
        className: 'my-class'
    })
    expect(wrapper).toMatchSnapshot();
});


test('should render correctly apply spill and today class', () => {
    wrapper.setProps({
        now: now,
        current: current
    });
    expect(wrapper).toMatchSnapshot();
});
