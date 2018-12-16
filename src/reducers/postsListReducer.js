export default (postsList = [], action) => {
    if (action.type === 'FETCH_POSTS') {
        return action.payload.data;
    }

    return postsList;
};
