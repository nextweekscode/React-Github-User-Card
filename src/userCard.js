import React from 'react'

class UserCard extends React.Component {

    render() {
        return (
            <>
            <img src={this.props.user.avatar_url} alt="here's something" width="300" height="300"/>
            <h2>{this.props.user.login}</h2>
            <p>Name: {this.props.user.name}</p>
            <br/>
            <h3>FOLLOWERS</h3>
            {this.props.followers.map(follower => (
                <>
                <img src={follower.avatar_url} alt="here's something else" width="200" height="200"/>
                <h2>{follower.login}</h2>
                </>
            ))}

            </>
        )
    }
}

export default UserCard