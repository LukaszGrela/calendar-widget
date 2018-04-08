import React from 'react';
import PropTypes from 'prop-types';
import { momentObj } from 'react-moment-proptypes';
import moment from 'moment';
import CalendarRow from './CalendarRow';
import { calendarDates, noop } from '../utils/helpers';

class CalendarMonthGrid extends React.Component {
    render() {
        const { now, date, dayClicked = noop } = this.props;
        const weeks = calendarDates(date);
        console.log(weeks);
        return (
            <div className='month-grid'>
                {
                    weeks.map((week, index) => {
                        return <CalendarRow
                            key={index}
                            className={`week row-${index}`}
                            days={week}
                            now={now}
                            current={date}
                            dayClicked={dayClicked} />
                    })
                }
            </div>
        );
    }
}
CalendarMonthGrid.propTypes = {
    now: momentObj.isRequired,
    date: momentObj.isRequired,
    dayClicked: PropTypes.func
}

export default CalendarMonthGrid;