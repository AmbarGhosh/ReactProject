import React from 'react'

export default function Account_Verify() {
  return (
    <>
      <div className="row g-3">
  <div className="col">
  <label for="fname">Gender</label><br/>
    <input type="text" className="form-control"  aria-label="First name"/>
  </div>
  <div className="col">
  <label for="fname">Date of birth</label><br/>
    <input type="text" className="form-control"  aria-label="Last name"/>
  </div>
  <div className="col">
  <label for="fname">Your Picture</label><br/>
    <input type="input" className="form-control"  aria-label="Last name"/>
  </div>
</div>
    </>
  )
}
