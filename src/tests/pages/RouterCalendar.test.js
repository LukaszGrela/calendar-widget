import React from 'react';
import {shallow} from 'enzyme';
import RouterCalendar from '../../pages/RouterCalendar';

test('should render correctly', () => {
    const wrapper = shallow(<RouterCalendar />);

    expect(wrapper).toMatchSnapshot();
});

test('should render correctly with props', ()=> {

    const wrapper = shallow(<RouterCalendar 
        match={
            {
                params: {
                    year:'1979',
                    month:'6',
                    date:'13'
                }
            }
        }
    />);

    expect(wrapper).toMatchSnapshot();
});