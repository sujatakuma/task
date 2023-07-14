import React from 'react'
import axios from 'axios'

const Card = (props) => {
    const {Name, email,id, phone}=props
  return (
    <>
    
    <div className='tc bg-light-green dib br3 pr3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200*200`} alt="robots" srcset="" />
      <h1>{Name}</h1>
      <h2>{email}</h2>
      <h2>{phone}</h2>
      <button onClick={async () => {
        const resp = await axios.delete(`http://localhost:4000/users/${id}`)
        alert('user deleted')
        window.location.reload();
      }}><h2>Delete</h2></button>
    </div>
    </>
  )
}

export default Card
