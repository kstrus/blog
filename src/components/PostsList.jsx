import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions';
import AuthorName from './AuthorName';

class PostsList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const list = this.props.posts.map((post) => {
            return (
                <div key={post.id} className="item">
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="header">{post.title}</div>
                        <div className="description">{post.body}</div>
                        <AuthorName userId={post.userId}/>
                    </div>
                </div>
            );
        });

        return (
            <div className="ui relaxed divided list">{list}</div>
        );
    }
}

PostsList.propTypes = {
    posts: PropTypes.array,
    users: PropTypes.array,
    fetchPosts: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps, {
    fetchPosts: fetchPosts
})(PostsList);
