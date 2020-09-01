import React from 'react'

class UserCard extends React.Component {

    render() {
        return (
            <>
            <img src={this.props.user.avatar_url} alt="here's something" width="200" height="200"/>
            <h2>{this.props.user.login}</h2>
            <p>{this.props.user.name}</p>
            <h3>FOLLOWERS</h3>
            {this.props.followers.map(follower => (
                
                <p>{follower.login}</p>
                
            ))}

            </>
        )
    }
}

export default UserCard