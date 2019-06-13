import * as types from '../constants';

const initialState = {
    name: 'Unknown name',
    age:27,
    loading: false
};

export default function user(state=initialState, action) {
    switch (action.type) {
        case types.USER_SEND_REQUEST:
            return {...state, loading: true};
        case types.USER_CHANGED_SUCCESSFULLY:
            return {...state, name: action.payload.name,
            loading: false};
        default:
            return state;
    }

}