import { FETCHING_QUOTES_START, FETCH_QUOTES_SUCCESS } from '../actions'

const initialState = {
    quotes: [],
    isLoading: false,
    error: ''
};

export const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_QUOTES_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
            case FETCH_QUOTES_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    quotes: action.payload
                }
        default:
            return state;
    }
}