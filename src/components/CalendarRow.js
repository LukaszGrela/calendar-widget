import React from 'react';
import PropTypes from 'prop-types';
import CalendarDay from './CalendarDay';

class CalendarRow extends React.Component {
    render = () => {
        const { className, days } = this.props;
        return (
            <div className={'row' + (className ? ' ' + className : '')}>
                {
                    days.map((day, index) => <CalendarDay
                        key={index}
                        className={`day-${index}`}
                        text={day}
                    />)
                }
            </div>
        )
    }
}
CalendarRow.propTypes = {
    days: PropTypes.array.isRequired
}

export default CalendarRow;