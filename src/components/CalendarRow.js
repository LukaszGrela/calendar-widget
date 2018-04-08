import React from 'react';
import PropTypes from 'prop-types';
import CalendarDay from './CalendarDay';
import { momentObj } from 'react-moment-proptypes';

class CalendarRow extends React.Component {
    render = () => {
        const { className, days, now } = this.props;
        return (
            <div className={'row' + (className ? ' ' + className : '')}>
                {
                    days.map((day, index) => {

                        const spill = typeof date === 'string' || !now ? '' :
                            (day.month() !== now.month() ? ' spill' : '');
                        const today = typeof date === 'string' || !now ? '' :
                            (day.month() === now.month() && day.date() === now.date() ? ' today' : '');

                        return <CalendarDay
                            key={index}
                            className={`day-${index}${spill}${today}`}
                            date={day}
                        />
                    })
                }
            </div>
        )
    }
}
CalendarRow.propTypes = {
    days: PropTypes.array.isRequired,
    now: momentObj
}

export default CalendarRow;