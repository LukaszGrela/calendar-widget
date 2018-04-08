import React from 'react';
import PropTypes from 'prop-types';
import { momentObj } from 'react-moment-proptypes';
import moment from 'moment';
import CalendarRow from './CalendarRow';
import CalendarMonthGrid from './CalendarMonthGrid';
import CalendarNavigation from './CalendarNavigation';
import CalendarYearMonthSelectors from './CalendarYearMonthSelectors';
import { noop } from '../utils/helpers';

class CalendarWidget extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dateRef: (props.currentMonth && props.currentMonth.clone()) || moment()
        }
    }

    nextMonth = () => {
        this.setState(prevState => ({
            dateRef: prevState.dateRef.clone().add(1, 'months')
        }), _ => {
            const { onDateChanged = noop } = this.props;
            onDateChanged(this.state.dateRef);
        });
    }

    prevMonth = () => {
        this.setState(prevState => ({
            dateRef: prevState.dateRef.clone().subtract(1, 'months')
        }), _ => {
            const { onDateChanged = noop } = this.props;
            onDateChanged(this.state.dateRef);
        });
    }

    today = () => {

        const { todayDate = moment(), onDateChanged = noop } = this.props;
        this.setState(prevState => ({
            dateRef: todayDate
        }), _ => {
            onDateChanged(this.state.dateRef);
        });
    }

    monthChanged = (month) => {
        this.setState(prevState => ({
            dateRef: prevState.dateRef.clone().month(month)
        }), _ => {
            const { onDateChanged = noop } = this.props;
            onDateChanged(this.state.dateRef);
        });
    }

    yearChanged = (year) => {
        const nYear = parseInt(year, 10);
        this.setState(prevState => ({
            dateRef: prevState.dateRef.clone().year(nYear)
        }), _ => {
            const { onDateChanged = noop } = this.props;
            onDateChanged(this.state.dateRef);
        });
    }

    componentWillReceiveProps = (nextProps) => {
        const { currentMonth } = nextProps;
        const { dateRef } = this.props;
        if (!dateRef || currentMonth.date() !== dateRef.date() || currentMonth.month() !== dateRef.month() || currentMonth.year() !== dateRef.year()) {
            // different or new
            this.setState(prevState => ({
                dateRef: currentMonth.clone()
            }));
        }
    }

    render = () => {
        const { dateRef = moment() } = this.state;
        const { currentMonth = moment(),
            todayDate: now = moment(),
            onDateChanged = noop } = this.props;
        console.log('dateRef', dateRef);
        return (
            <div className='CalendarWidget'>
                <div className='month-page'>
                    <div className='calendar-header'>
                        <div className='today middle'
                            onClick={() => {
                                this.today();
                            }}>{now.format('MMMM Do YYYY')}</div>
                        <CalendarYearMonthSelectors
                            className='left'
                            year={dateRef.year()}
                            month={dateRef.month()}
                            monthChanged={this.monthChanged}
                            yearChanged={this.yearChanged}
                        />
                        <CalendarNavigation
                            className='right'
                            navigateUp={this.prevMonth}
                            navigateDown={this.nextMonth}
                        />
                    </div>
                    <div className='calendar-view'>
                        <CalendarRow
                            className='week-header'
                            days={moment.weekdaysShort()} />

                        <CalendarMonthGrid
                            date={dateRef}
                            now={now}
                            dayClicked={onDateChanged} />
                    </div>
                </div>
            </div>
        );
    }
}

CalendarWidget.propTypes = {
    todayDate: momentObj,
    currentMonth: momentObj,
    onDateChanged: PropTypes.func
}

export default CalendarWidget;