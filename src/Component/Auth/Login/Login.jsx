import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <>
       <div className='container'>
     <div  className='form-box'>
      <h1>Login</h1>
       <form>
        <div className='input-group'>
          <div className='input-field'>
           <i className='fa-solid fa-phone'></i>
           <input type="phonenumber" placeholder='Phone Number'/> 
          </div>
        </div>
        <button className="button"type='button'style={{background:"#004AAD"}}>Login</button>
        <div className='btn-field'>
         <button type='button'style={{background:"#FF0047"}}>Cancel</button>
         <button className="log"type='button'style={{background:"#045c09"}}>SignUp</button>
        </div>
        </form>
     </div>
    </div>
    </>
  )
}
