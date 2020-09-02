import React from 'react'
import axios from 'axios'
import UserCard from './userCard'
import './App.css'

class App extends React.Component {
  state = {
    user: {},
    followers: [],
    userText: '',
    error: '',
    
}

componentDidMount() {
  axios
   .get('https://api.github.com/users/nextweekscode')
   .then(res => 
    
    this.setState({
      user: res.data
    }))
  .catch(err => console.log(err))

  axios
  .get('https://api.github.com/users/nextweekscode/followers')
  .then(res => {this.setState({
    followers: res.data
  })
})
  .catch(err => console.log(err))

}

handleChanges = e => {
  this.setState({
    userText: e.target.value
  })
}

fetchUsers = e => {
  e.preventDefault()
  axios
  .get(`https://api.github.com/users/${this.state.userText}`)
  .then(res =>{
    this.setState({
      user: res.data,
      error: '',
    })
})
.catch(err => {
  this.setState({
    error: 'No one with that username!'
  })
})
axios
.get(`https://api.github.com/users/${this.state.userText}/followers`)
.then(res => {
  this.setState({
    followers: res.data
  })
})
.catch(err => console.log)
}




render() {
  return (
    <div className="App">
    <h1>GITHUB USERS, OH MY!</h1>
    <input
    type="text"
    value={this.state.userText}
    onChange={this.handleChanges}/>
    <button onClick={this.fetchUsers}>Find User</button>
    {this.state.error && <p style={{ color: 'red'}}>{this.state.error}</p>}
    <div className="userCard">
      {!this.state.error && <UserCard user={this.state.user} followers={this.state.followers} />}
      
      
    </div>
     
    </div>
  )
}
}

export default App;
