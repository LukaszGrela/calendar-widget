import React from 'react';
import {shallow} from 'enzyme';
import RouterCalendar from '../../pages/RouterCalendar';

test('should render correctly', () => {
    const wrapper = shallow(<RouterCalendar />);

    expect(wrapper).toMatchSnapshot();
})