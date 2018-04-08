import React from 'react';
import PropTypes from 'prop-types';
import { momentObj } from 'react-moment-proptypes';
import { noop } from '../utils/helpers';

class CalendarDay extends React.Component {
    render = () => {
        const { date, className, handleClick = noop } = this.props;

        const text = typeof date === 'string' ? date : date.date();
        return (
            <div className={'day' + (className ? ' ' + className : '')}
                onClick={
                    () => { handleClick(date) }
                }
            >{text}</div>
        )
    }
}
CalendarDay.propTypes = {
    date: PropTypes.oneOfType([PropTypes.string, momentObj]).isRequired,
    handleClick: PropTypes.func
};
export default CalendarDay;