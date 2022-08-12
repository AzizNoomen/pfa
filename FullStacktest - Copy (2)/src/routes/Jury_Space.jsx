import React, {Fragment} from 'react'
import { BrowserRouter as Router ,Link, Route, Routes} from 'react-router-dom'

const Jury_Space = () => {
  return (
    <Fragment>
      <div >
        <h1>Jury Space</h1>
        <button className="form-control" ><a href='/login'>LOG OUT</a> </button>
      </div>
    </Fragment>
  )
}

export default Jury_Space