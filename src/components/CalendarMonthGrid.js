import React from 'react';
import PropTypes from 'prop-types';
import { momentObj } from 'react-moment-proptypes';
import moment from 'moment';
import CalendarRow from './CalendarRow';
import { calendarDates } from '../utils/helpers';

class CalendarMonthGrid extends React.Component {
    render() {
        const { now, date } = this.props;
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
                            current={date} />
                    })
                }
            </div>
        );
    }
}
CalendarMonthGrid.propTypes = {
    now: momentObj.isRequired,
    date: momentObj.isRequired,
}

export default CalendarMonthGrid;