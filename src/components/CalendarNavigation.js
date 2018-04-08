import React from 'react';
import PropTypes from 'prop-types';
import IconUp from '../icons/IconUp';
import IconDown from '../icons/IconDown';
const noop = () => { };
const CalendarNavigation = (props) => {
    const { className, navigateUp = noop, navigateDown = noop } = props;
    return (
        <div className={`month-navigation ${className}`}>
            <button onClick={() => {
                navigateUp()
            }}><IconUp /></button><button onClick={() => {
                navigateDown()
            }}><IconDown /></button>
        </div>
    )
};

CalendarNavigation.propTypes = {
    navigateUp: PropTypes.func.isRequired,
    navigateDown: PropTypes.func.isRequired
}

export default CalendarNavigation;