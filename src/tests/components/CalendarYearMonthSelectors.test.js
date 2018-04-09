import React from 'react';
import { shallow } from 'enzyme';
import CalendarYearMonthSelectors from '../../components/CalendarYearMonthSelectors';


let wrapper, year, month, monthChanged, yearChanged;
jest.unmock('moment');
beforeEach(() => {
    year = 1979;
    month = 5;
    monthChanged = jest.fn();
    yearChanged = jest.fn();
    wrapper = shallow(<CalendarYearMonthSelectors
        year={year}
        month={month}
    />);
});

test('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should call monthChanged', () => {

    wrapper.setProps({
        monthChanged: monthChanged
    });

    const month = wrapper.find('.month-selector');
    expect(month).toHaveLength(1);

    month.at(0).simulate('change', { target: { value: 'Jan' } });
    expect(monthChanged).toHaveBeenLastCalledWith('Jan');
});

test('Should call yearChanged', () => {

    wrapper.setProps({
        yearChanged: yearChanged
    });

    const month = wrapper.find('.year-selector');
    expect(month).toHaveLength(1);

    month.at(0).simulate('change', { target: { value: '1980' } });
    expect(yearChanged).toHaveBeenLastCalledWith('1980');
});
