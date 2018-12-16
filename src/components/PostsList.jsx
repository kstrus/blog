import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions';

class PostsList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const list = this.props.postsList.map((post) => {
            return (
                <div key={post.id}>{post.title}</div>
            );
        });

        return (
            <div>{list}</div>
        );
    }
}

PostsList.propTypes = {
    postsList: PropTypes.array,
    fetchPosts: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        postsList: state.postsList
    };
};

export default connect(mapStateToProps, {
    fetchPosts: fetchPosts
})(PostsList);
