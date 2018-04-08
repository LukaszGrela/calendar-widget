import React from 'react';
import PropTypes from 'prop-types';
import { momentObj } from 'react-moment-proptypes';

class CalendarDay extends React.Component {
    render = () => {
        const { date, className } = this.props;
        
        const text = typeof date === 'string' ? date : date.date();
        return (
            <div className={'day' + (className ? ' ' + className : '')}>{text}</div>
        )
    }
}
CalendarDay.propTypes = {
    date: PropTypes.oneOfType([PropTypes.string,momentObj]).isRequired
};
export default CalendarDay;