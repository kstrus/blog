import React from 'react';
import PostsList from './PostsList';

class App extends React.Component {
    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px', marginBottom: '20px' }}>
                <PostsList />
            </div>
        );
    }
}

export default App;
