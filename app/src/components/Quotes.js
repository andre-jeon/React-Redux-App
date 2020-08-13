import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { fetchQuotes } from '../store'

const Quotes = (props) => {
    useEffect(() => {
        // call action creator that will be in charge of fetching data
        props.fetchQuotes();
    }, [])
    return (
        <section>
            <h1>🐻Daily Kanye Tweets🐻</h1>
            {props.isLoading ? (<h4>Loading Kanye's Tweets now...</h4>) : null}
            {props.error ? (<p style={{ color: 'red' }}>GEORGE BUSH DOESN"T CARE ABOUT BLACK PEOPLE</p>) : null}
            {props.quotes.length > 0 ? <div>{props.quote.map(quote => (<h2>{quote}</h2>))}</div> : null}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        quotes: state.quotes,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchQuotes })(Quotes);