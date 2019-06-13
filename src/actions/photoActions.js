import * as types from '../constants';
export function addPhoto(src){
    return dispatch=>{
        dispatch({
            type: types.PHOTO_SEND_REQUEST,
            error: false,
            payload: src
        });

        setTimeout(()=>{
            dispatch({
                type: types.PHOTO_ADD_CHANGED_SUCCESSFULLY,
                error: false,
                payload: {
                    id: Math.floor(Math.random()*100),
                    src

                }
            })
        }, 2000)
    }
}

export function deletePhoto(id){
    return dispatch => {
        dispatch({
            type: types.PHOTO_SEND_REQUEST,
            error: false,
            payload: id
        });
        setTimeout (()=>{
            dispatch({
                type: types.PHOTO_DELETE_SUCCESSFULLY,
                error: false,
                payload: id
            })
        }, 2000)
    }
}