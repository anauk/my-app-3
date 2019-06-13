import { combineReducers } from 'redux';
import page from './page';
import user from './user';
import photo from './photo';
export default combineReducers({
    page,
    user,
    photo
})
