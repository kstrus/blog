import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return (dispatch) => {
        jsonPlaceholder.get('/posts').then((response) => {
            dispatch({ type: 'FETCH_POSTS', payload: response.data });
        });
    };
};

// -----> shortened syntax

// export const fetchPosts = () => dispatch => {
//     jsonPlaceholder.get('/posts').then((response) => {
//         dispatch({ type: 'FETCH_POSTS', payload: response.data });
//     });
// };
