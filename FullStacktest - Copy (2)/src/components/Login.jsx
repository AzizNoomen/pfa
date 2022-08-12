import React, { useEffect,PropTypes, useState, Component, Fragment } from 'react'
import "../index.css"
import Axios from 'axios';
import { Link, Route, Routes,Switch, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
 
const Login = () => {

  const Navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [msg, setMsg] = useState('');
  const [table, settable] = useState([]);

  useEffect(() => { 
    const fetchData = async () => {
     const res = await Axios.get("http://localhost:3006/data",
     );

     settable(res.data)
     console.log("updated")
    };
    fetchData();
    console.log("mounted");
   },[]);

  const onSubmitForm= async (e) => {
    e.preventDefault();
    try {
        await Axios.post('http://localhost:3006/login', {
            email: email,
            password: password,
        });
        
        {table.map((key) => (
          (key.email == email && key.jury == true )? 
           <div >{Navigate("/Jury_Space")}</div>:<div> </div>
        ))}
        {table.map((key) => (
          (key.email == email && key.supervisor == true )? 
           <div >{Navigate("/Supervisor_Space")}</div>:<div> </div>
        ))}
         {table.map((key) => (
        (key.email == email && key.admin == true )? 
           <div >{Navigate("/Admin_Space")}</div>:<div> </div>
        ))}
      } catch (error) {
        if (error.response) {
        setMsg(error.response.data.msg);
        }
      }
};
    return (
      
      <Fragment>
        <form onSubmit={onSubmitForm}>
          <h1>Sign In</h1><br></br><br></br><br></br>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email..."
              value={email} 
              onChange={(e) =>{
                setemail( e.target.value);}}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password..."
              value={password} 
              required
              onChange={(e) =>{
                setpassword(e.target.value)
              }}
            />
            </div>
          <br></br>
          <div className="d-grid">
            <button className="btn btn-primary" >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            No account ? <a href="/sign-up">  Sign Up </a>
          </p>
        <p id='button'>{msg}</p>
        </form>
      </Fragment>
    )
}
export default Login;