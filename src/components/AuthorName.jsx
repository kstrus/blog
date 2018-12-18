import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class AuthorName extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const { user } = this.props;

        if (!user) {
            return null;
        }

        return (
            <div className="header">{user.name}</div>
        );
    }
}

AuthorName.propTypes = {
    userId: PropTypes.number,
    user: PropTypes.object,
    fetchUser: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find((item) => item.id === ownProps.userId)
    };
};

export default connect(mapStateToProps, {
    fetchUser: fetchUser
})(AuthorName);
