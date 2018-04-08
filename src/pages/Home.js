import React from 'react';
import moment from 'moment';
import CalendarWidget from '../components/CalendarWidget';

class Home extends React.Component {
    render = () => {

        return (
            <section>
                <article>
                    <h1>Calendar Widget</h1>
                    <p>The Code Exercise for JS/React Developer</p>
                </article>
                <article className='widgets'>
                    <CalendarWidget
                        now={moment('19790613')}
                    />
                    <CalendarWidget
                        now={moment()} />
                </article>
            </section>
        );
    }
};
export default Home;