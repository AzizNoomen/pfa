import React,{ Fragment, useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route ,Link ,Navigate} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Jury_Space from './routes/Jury_Space'
import Admin_Space from './routes/Admin_Space'
import Supervisor_Space from './routes/Supervisor_Space'


function App() {
  return (
    <Fragment>
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<Login/>} />
                <Route path="/login" element={<Login/>} />
                <Route exact path="/sign-up" element={<SignUp />} />
                <Route exact path="/Jury_Space" element={<Jury_Space/>}/>
                <Route exact path="/Admin_Space" element={<Admin_Space/>}/>
                <Route exact path="/Supervisor_Space" element={<Supervisor_Space/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Fragment>
  )
}
export default App;