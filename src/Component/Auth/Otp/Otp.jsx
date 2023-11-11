import React from 'react'

export default function Otp() {
  return (
    <>
      <div className='container'>
     <div  className='form-box'>
       <form>
        <div className='input-group'>
          <div className='input-field'>
           <input type="text" placeholder='Enter OTP'/> 
          </div>
        </div>
        <button className="button"type='button'style={{background:"#045c09"}}>Submit OTP</button>
        <div className='btn-field'>
         <button type='button'style={{background:"#FF0047"}}>Cancel</button>
         <button className="log"type='button'style={{background:"#004AAD"}}>Resend</button>
        </div>
        </form>
     </div>
    </div>

    </>
  )
}
