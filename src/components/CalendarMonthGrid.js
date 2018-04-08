import React from 'react';
import PropTypes from 'prop-types';
import { momentObj } from 'react-moment-proptypes';
import moment from 'moment';
import CalendarRow from './CalendarRow';

const calendarDates = (now) => {
    const monthLength = now.daysInMonth();
    const firstOfMonth = now.clone().date(1);
    const startsAt = firstOfMonth.day();
    let weeks = [
        [],
        [],
        [],
        [],
        [],
        []
    ];//6 weeks always to allow for 31days starting at last day of week
    let start = -startsAt;
    let week = 0;
    while (week < weeks.length) {
        let weekDay = 0;
        while (weekDay < 7) {
            console.log(week, weekDay, start);
            weeks[week].push(firstOfMonth.clone().add(start, 'days'));
            start++;
            weekDay++;
        }
        week++;
    }



    return weeks;
}

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
                            now={now} />
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