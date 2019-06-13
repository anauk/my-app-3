import * as types  from '../constants';

export function changeName(name){
    return dispatch => {
        dispatch({
            type: types.USER_SEND_REQUEST,
            error: false,
            payload : name
        });

        setTimeout(() =>{
            dispatch({
                type: types.USER_CHANGED_SUCCESSFULLY,
                error: false,
                payload: {
                    name: name,
                    age: 45
                }
            })
        }, 5000)
    }
}