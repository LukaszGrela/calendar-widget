import React from 'react';
import CalendarWidget from '../components/CalendarWidget';

class Home extends React.Component {
    render = () => {
        
        return (
            <section>
                <article>
                    <h1>Calendar Widget</h1>
                    <p>The Code Exercise for JS/React Developer</p>
                </article>
                <article>
                    <CalendarWidget />
                </article>
            </section>
        );
    }
};
export default Home;