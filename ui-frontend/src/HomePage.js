import { Component } from 'react'
import React  from 'react'
import Cardlist from './Cardlist'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary'
import axios from 'axios';



class HomePage extends Component {
  constructor(){
    super()
    this.state = {
      Users: [],
      searchfield: ''
    }
    this.loadUsers();
  }

  async loadUsers(){
    const response = await axios.get('http://localhost:4000/users')
    this.setState({Users: response.data })
  }
  
  onSearchChange=(event)=>{
    this.setState({searchfield: event.target.value || ''})
    }
  render(){
    const filterUsers=this.state.Users.filter(User=>{
      return User.name.toLowerCase().includes(this.state.searchfield.toLowerCase() )
    })
return (
    <div className='tc'>
      <h1 >Users</h1>
      <SearchBox searchChange={this.onSearchChange}></SearchBox>
      <a href='/add-user'><button>Add User</button></a>
      <Scroll>
        <ErrorBoundary>
      <Cardlist Users={filterUsers}/>
      </ErrorBoundary>
      </Scroll>
    </div>
  )
}
}

export default HomePage
