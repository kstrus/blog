import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

// -----> shortened syntax

// export const fetchPosts = () => dispatch => {
//     jsonPlaceholder.get('/posts').then((response) => {
//         dispatch({ type: 'FETCH_POSTS', payload: response.data });
//     });
// };

export const fetchUser = (id) => {
    return (dispatch) => {
        jsonPlaceholder.get(`/users/${id}`).then((response) => {
            dispatch({
                type: 'FETCH_USER',
                payload: response.data
            });
        });
    };
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach((id) => dispatch(fetchUser(id)));
};
