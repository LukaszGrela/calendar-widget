import React from 'react';
// import { Redirect } from 'react-router-dom';
import { shallow } from 'enzyme';
import AppRouter from '../../routers/AppRouter';

test('Should render correctly', () => {
    const wrapper = shallow(<AppRouter />);
    // expect(wrapper.containsMatchingElement(<Redirect to='/' />)).toEqual(true);
    expect(wrapper).toMatchSnapshot();
});