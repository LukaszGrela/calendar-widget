import React from 'react';
import PropTypes from 'prop-types';

class CalendarDay extends React.Component {
    render = () => {
        const { text, className } = this.props;
        return (
            <div className={'day' + (className ? ' ' + className : '')}>{text}</div>
        )
    }
}
CalendarDay.propTypes = {
    text: PropTypes.string
};
export default CalendarDay;