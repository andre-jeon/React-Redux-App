import axios from 'axios'

export const FETCHING_QUOTES_START = 'FETCHING_QUOTES_START'
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS'
export const fetchQuotes = () => (dispatch) => {
    // dispatch FETCHING action
    dispatch({ type: FETCHING_QUOTES_START })
    // make an axios call
    axios.get('https://api.kanye.rest')
        .then((res) => {
            // inside .then(), dispatch new action with data
            // res.data
            console.log(res)
            dispatch({ type: FETCH_QUOTES_SUCCESS, payload: res.data.quote})
        })
        .catch((err) => console.log(err))
    // inside .then, dispatch new action with data
}

// redux-thunk
const thunk = (store) => (next) => (action) => {
    if (typeof action === 'object') {
        next(action);
    } else if (typeof action === 'function') {
        action(store.dispatch)
    }
}