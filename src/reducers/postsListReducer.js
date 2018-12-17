export default (postsList = [], action) => {
    switch (action) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return postsList;
    }
};
