import React from 'react';
import moment from 'moment';
import CalendarWidget from '../components/CalendarWidget';

class Home extends React.Component {

    calendarDateChanged = (date) => {
        // this will update the CalendarWidget
        this.props.history.push(`/${date.year()}/${date.month()+1}/${date.date()}`);
    }

    render = () => {
        const { match } = this.props;
        const { params } = match;
        let current = moment();
        const { year, month, date } = params;
        if (year) current.year(parseInt(year, 10));
        if (month) current.month(parseInt(month, 10) - 1);
        if (date) current.date(parseInt(date, 10));

        return (
            <section>
                <article>
                    <h1>Calendar Widget</h1>
                    <p>The Code Exercise for JS/React Developer</p>
                </article>
                <article className='widgets'>
                    <CalendarWidget
                        todayDate={moment()}
                        currentMonth={current}
                        onDateChanged={this.calendarDateChanged} />
                </article>
            </section>
        );
    }
};
export default Home;