import React from 'react';
import {shallow} from 'enzyme';
import LinkedCalendars from '../../pages/LinkedCalendars';

test('should render correctly', () => {
    const wrapper = shallow(<LinkedCalendars />);

    expect(wrapper).toMatchSnapshot();
})