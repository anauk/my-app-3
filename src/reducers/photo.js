import * as types from '../constants';

const initialState = {
    photos: [],
    fetching: false
};

export default function photo(state = initialState, action) {
    switch (action.type) {
        case types.PHOTO_SEND_REQUEST:
            return {
                ...state,
                fetching: false
            };
        case types.PHOTO_ADD_CHANGED_SUCCESSFULLY:
            let photos = state.photos.slice();
            photos.push(action.payload);
            return {
                ...state,
                photos,
                fetching: false
            };
        case types.PHOTO_DELETE_SUCCESSFULLY:
            let delPhotos = state.photos.slice();
            let index = delPhotos
                .findIndex(item => item.id === action.payload);
            if (index >= 0) {
                delPhotos.splice(index, 1);
            }
            return {
                ...state,
                photos: delPhotos,
                fatching: false
            };
        default:
            return state;
    }
}