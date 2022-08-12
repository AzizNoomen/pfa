import React, {Fragment} from 'react'
import { BrowserRouter as Router ,Link, Route, Routes} from 'react-router-dom'

function Supervisor_Space () {
  return (
    <Fragment>
      <div>
        <h1>Supervisor Space</h1>
        <button className="form-control"><a href='/login'>LOG OUT</a> </button>
      </div>
    </Fragment>
  )
}

export default Supervisor_Space