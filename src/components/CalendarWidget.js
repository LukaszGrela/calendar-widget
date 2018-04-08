import React from 'react';
import PropTypes from 'prop-types';
import { momentObj } from 'react-moment-proptypes';
import moment from 'moment';
import CalendarRow from './CalendarRow';
import CalendarMonthGrid from './CalendarMonthGrid';
import CalendarNavigation from './CalendarNavigation';
import CalendarYearMonthSelectors from './CalendarYearMonthSelectors';

const noop = () => { };

class CalendarWidget extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dateRef: (props.now && props.now.clone()) || moment()
        }
    }

    nextMonth = () => {
        this.setState(prevState => ({
            dateRef: prevState.dateRef.clone().add(1, 'months')
        }), _ => {
            const { onDateChanged = noop } = this.props;
            onDateChanged();
        });
    }
    prevMonth = () => {
        this.setState(prevState => ({
            dateRef: prevState.dateRef.clone().subtract(1, 'months')
        }), _ => {
            const { onDateChanged = noop } = this.props;
            onDateChanged();
        });
    }

    today = () => {

        const { now = moment(), onDateChanged = noop } = this.props;
        this.setState(prevState => ({
            dateRef: now
        }), _ => {
            onDateChanged();
        });
    }

    monthChanged = (month) => {
        this.setState(prevState => ({
            dateRef: prevState.dateRef.clone().month(month)
        }), _ => {
            const { onDateChanged = noop } = this.props;
            onDateChanged();
        });
    }
    yearChanged = (year) => {
        const nYear = parseInt(year, 10);
        this.setState(prevState => ({
            dateRef: prevState.dateRef.clone().year(nYear)
        }), _ => {
            const { onDateChanged = noop } = this.props;
            onDateChanged();
        });
    }

    componentWillReceiveProps = (nextProps) => {
        const { now } = nextProps;
        const { dateRef } = this.props;
        if (!dateRef || now.date() !== dateRef.date() || now.month() !== dateRef.month() || now.year() !== dateRef.year()) {
            // different or new
            this.setState(prevState => ({
                dateRef: now.clone()
            }));
        }
    }

    render = () => {
        const { dateRef = moment() } = this.state;
        const { now = moment() } = this.props;
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
                            className='navigation right'
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
                            now={now} />
                    </div>
                </div>
            </div>
        );
    }
}

CalendarWidget.propTypes = {
    now: momentObj,
    onDateChanged: PropTypes.func
}

export default CalendarWidget;