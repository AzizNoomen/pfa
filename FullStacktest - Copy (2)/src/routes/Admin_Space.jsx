import React, {Fragment} from 'react'
import { BrowserRouter as Router ,Link, Route, Routes} from 'react-router-dom'

function Admin_Space () {
  return (
    <Fragment>
      <div>
        <h1>Admin Space</h1>
        <button className="form-control"><a href='/login'>LOG OUT</a> </button>
      </div>
    </Fragment>
  )
}

export default Admin_Space