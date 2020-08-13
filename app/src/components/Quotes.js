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
            {props.error ? (<p style={{ color: 'red' }}>I CAN'T BE MANAGED</p>) : null}
            {props.quotes.length > 0 ? <h2>"{props.quotes}"</h2> : null}
            <button>GIVE ME ANOTHA ONE</button>
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