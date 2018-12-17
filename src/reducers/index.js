import { combineReducers } from 'redux';
import postsListReducer from './postsListReducer';

export default combineReducers({
    postsList: postsListReducer
});
