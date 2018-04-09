import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import CalendarMonthGrid from '../../components/CalendarMonthGrid';

let wrapper, now, date;
beforeEach(() => {
    now = moment('19790613');
    date = moment();

    wrapper = shallow(<CalendarMonthGrid
        now={now}
        date={date}
    />);
});

test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});