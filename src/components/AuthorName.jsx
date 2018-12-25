import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AuthorName extends React.Component {
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
    user: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find((item) => item.id === ownProps.userId)
    };
};

export default connect(mapStateToProps)(AuthorName);
