import React from 'react';
import PropTypes from 'prop-types';
import { momentObj } from 'react-moment-proptypes';
import moment from 'moment';

const calendarDates = (now) => {
    let weeks = [
        [],
        [],
        [],
        [],
        [],
        []
    ];//6 weeks always to allow for 31days starting at last day of week

    return dates;
}

class CalendarMonthGrid extends React.Component {
    render() {
        const { now } = this.props;
        const monthLength = now.daysInMonth();
        const firstOfMonth = moment().year(now.year()).month(now.month()).date(1);
        const startsAt = firstOfMonth.day();
        console.log(startsAt, monthLength);
        return (
            <div className='month-grid'>
                {
                    // calendarDates(now).map(date => {
                    //     return <CalendarRow
                    //         className='week-header'
                    //         days={} />
                    // })
                }
                <div className='week row row-0'>
                    <div className='day day-0 spill'>29</div>
                    <div className='day day-1 spill'>30</div>
                    <div className='day day-2'>1</div>
                    <div className='day day-3'>2</div>
                    <div className='day day-4'>3</div>
                    <div className='day day-5'>4</div>
                    <div className='day day-6'>5</div>
                </div>
                <div className='week row row-1'>
                    <div className='day day-0'>6</div>
                    <div className='day day-1'>7</div>
                    <div className='day day-2'>8</div>
                    <div className='day day-3'>9</div>
                    <div className='day day-4'>10</div>
                    <div className='day day-5'>11</div>
                    <div className='day day-6'>12</div>
                </div>
                <div className='week row row-2'>
                    <div className='day day-0'>13</div>
                    <div className='day day-1'>14</div>
                    <div className='day day-2'>15</div>
                    <div className='day day-3'>16</div>
                    <div className='day day-4'>17</div>
                    <div className='day day-5'>18</div>
                    <div className='day day-6'>19</div>
                </div>
                <div className='week row row-3'>
                    <div className='day day-0'>20</div>
                    <div className='day day-1'>21</div>
                    <div className='day day-2'>22</div>
                    <div className='day day-3'>23</div>
                    <div className='day day-4'>24</div>
                    <div className='day day-5'>25</div>
                    <div className='day day-6'>26</div>
                </div>
                <div className='week row row-4'>
                    <div className='day day-0'>27</div>
                    <div className='day day-1'>28</div>
                    <div className='day day-2'>29</div>
                    <div className='day day-3'>30</div>
                    <div className='day day-4'>31</div>
                    <div className='day day-5 spill'>1</div>
                    <div className='day day-6 spill'>2</div>
                </div>
                <div className='week row row-5'>
                    <div className='day day-0 spill'>3</div>
                    <div className='day day-1 spill'>4</div>
                    <div className='day day-2 spill'>5</div>
                    <div className='day day-3 spill'>6</div>
                    <div className='day day-4 spill'>7</div>
                    <div className='day day-5 spill'>8</div>
                    <div className='day day-6 spill'>9</div>
                </div>
            </div>
        );
    }
}
CalendarMonthGrid.propTypes = {
    now: momentObj.isRequired
}

export default CalendarMonthGrid;