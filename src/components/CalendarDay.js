import React from 'react';
import PropTypes from 'prop-types';
import { momentObj } from 'react-moment-proptypes';
import { noop } from '../utils/helpers';

class CalendarDay extends React.Component {
    clickHandler = () => {
        const { date, handleClick = noop } = this.props;
        handleClick(date);
    }
    render = () => {
        const { date, className } = this.props;

        const text = typeof date === 'string' ? date : date.date();
        return (
            <div className={'day' + (className ? ' ' + className : '')}
                onClick={this.clickHandler}
            >{text}</div>
        );
    }
}
CalendarDay.propTypes = {
    className: PropTypes.string,
    date: PropTypes.oneOfType([PropTypes.string, momentObj]).isRequired,
    handleClick: PropTypes.func
};
export default CalendarDay;