import { combineReducers } from 'redux';

const postsListReducer = (postsList = [], action) => {
    if (action.type === 'FETCH_POSTS') {
        return action.payload.data;
    }

    return postsList;
};

export default combineReducers({
    postsList: postsListReducer
});
