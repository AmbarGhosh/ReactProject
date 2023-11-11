import React from 'react'
import"./Sign_up.css"
import { Link } from 'react-router-dom'

export default function Sign_up() {
  return (
    <> 
    <div className='container'>
     <div  className='form-box'>
      <h1>Sign Up</h1>
       <form>
        <div className='input-group'>
        <div className='input-field'>
           <i className='fa-solid fa-user'></i>
           <input type="text" placeholder='First Name'/> 
          </div>
          <div className='input-field'>
           <i className='fa-solid fa-user'></i>
           <input type="text" placeholder='Last Name'/> 
          </div>
          <div className='input-field'>
           <i className='fa-solid fa-phone'></i>
           <input type="phonenumber" placeholder='Phone Number'/> 
          </div>
        </div>
        <button className="button"type='button'style={{background:"#045c09"}}>SignUp</button>
        <div className='btn-field'>
         <button type='button'style={{background:"#FF0047"}}>Cancel</button>
         <button className="log"type='button'style={{background:"#004AAD"}}>Login</button>
        </div>
        </form>
     </div>
    </div>
    </>
  )
}
