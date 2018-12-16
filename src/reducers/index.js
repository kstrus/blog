import { combineReducers } from 'redux';
import postsListReducer from './postsListReducer';

// const postsListReducer = (postsList = [], action) => {
//     if (action.type === 'FETCH_POSTS') {
//         return action.payload.data;
//     }
//
//     return postsList;
// };

export default combineReducers({
    postsList: postsListReducer
});
