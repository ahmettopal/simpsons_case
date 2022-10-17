import {
    SET_DATA,
    INIT,
    SET_SHOULD_REFRESH,
} from '../actions/mainActions';

const mainReducer = (state, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            };
        case INIT:
            return {
                ...state,
                ...action.payload,
            };
        case SET_SHOULD_REFRESH:
            return {
                ...state,
                shouldRefresh: action.payload,
            };
        default:
            return state;
    }
};

export default mainReducer;
