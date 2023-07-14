import { Component } from 'react'
import React  from 'react'
import axios from 'axios';



class AddUser extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      phone: '',
    }
  }

  async handleSubmit(){
    console.log('state us ', this.state)
    const resp = await axios.post('http://localhost:4000/users',)
    console.log(resp)  
  }
  
  onNameChange=(event)=>{
    this.setState({name: event.target.value || ''})
    }
onEmailChange=(event)=>{
        this.setState({email: event.target.value || ''})
        }
        onPhoneChange=(event)=>{
            this.setState({phone: event.target.value || ''})
            }


  render(){
    return (
    <div className='tc'>
      <h1 >Add User</h1>
      <div className='pa2'>
      <input className='pa3 ba b--green bg-lightest-blue'
      
      type='SearchBox' 
      placeholder='Name'
      
       onChange={this.onNameChange}
       >
     
      </input>
    
    </div>
    <div className='pa2'>
      <input className='pa3 ba b--green bg-lightest-blue'
      
      type='SearchBox' 
      placeholder='Email'
      
       onChange={this.onEmailChange}
       >
     
      </input>
    
    </div>
    <div className='pa2'>
      <input className='pa3 ba b--green bg-lightest-blue'
      
      type='SearchBox' 
      placeholder='Phone'
      
       onChange={this.onPhoneChange}
       >
     
      </input>
    
    </div>
    <button onClick={async () => {
        const resp = await axios.post('http://localhost:4000/users', this.state)
        alert('user added')
    }}><h2>Add Now</h2> </button>
    </div>
  )
}
}

export default AddUser
