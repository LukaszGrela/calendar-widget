import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CalendarRow from './CalendarRow';
import CalendarMonthGrid from './CalendarMonthGrid';

class CalendarWidget extends React.Component {

    render = () => {
        const now = moment();
        console.log(now)
        console.log(moment.weekdaysShort())
        return (
            <div className='CalendarWidget'>
                <div className='month-page'>
                    <div className='calendar-navigation'>

                    </div>
                    <div className='calendar-view'>
                        <CalendarRow
                            className='week-header'
                            days={moment.weekdaysShort()} />

                        <CalendarMonthGrid
                            now={now} />
                    </div>
                </div>
            </div>
        );
    }
}

CalendarWidget.propTypes = {

}

export default CalendarWidget;