import * as React from 'react';
import { useEffect, useState, Component, Fragment } from 'react'
import "../index.css"
import { Link } from "react-router-dom"
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/joy/Avatar';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const SignUp = () => {
  const Navigate = useNavigate();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [jury, setjury]=useState(false)
  const [supervisor, setsupervisor]=useState(false)
  const [admin,setadmin]=useState(false)
  const [test,settest]=useState(false)
  const [msgtest,setmsgtest]=useState(false)
  const [msgtest1,setmsgtest1]=useState(false)
  const [msg, setMsg] = useState('');
  const [msg1, setMsg1] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (test == true )
      {
        await Axios.post('http://localhost:3006/sign-up', {
            name: name,
            email: email,
            password: password,
            jury: jury,
            admin:admin,
            supervisor:supervisor
        });
        Navigate("/login");
      }
      else
      { 
        setMsg1("You must select one of these options :");
      } 
      
    } catch (error) {
        if (error.response) {
            setMsg1("");
            setMsg(error.response.data.msg);
        }
    }
}
    return (
      <Fragment>
        <form onSubmit={onSubmitForm}>
          <h1>Sign Up</h1><br></br><br></br><br></br>
          <div className="mb-3">
            <label>Name</label>
            <input 
              type="text"
              className="form-control" 
              placeholder="Enter your name..." 
              value={name} 
              onChange={(e) =>{
                  setname(e.target.value)
                
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email..."
              value={email} 
              onChange={(e) =>{
                  setemail(e.target.value)
                
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password..."
              value={password} 
              onChange={(e) =>{
                  setpassword(e.target.value)
                
              }}
              required
            />
          </div><br></br>
          <p id='button'>{msg1}</p>
          <RadioGroup 
            required 
            aria-label="platform"
            defaultValue="Website"
            overlay
            name="platform"
            sx={{
              flexDirection: 'row',
              gap: 2.5,
              [`& .${radioClasses.checked}`]: {
                [`& .${radioClasses.action}`]: {
                  inset: -1,
                  border: '3px solid',
                  borderColor: 'primary.500',
                },
              },
            }}
          >
            {['Admin', 'Supervisor', 'Jury'].map((value) => (
              <Sheet
                required
                key={value}
                variant="outlined"
                sx={{
                  borderRadius: 'md',
                  bgcolor: 'background.level1',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 0.025,
                  p: 0.25,
                  minWidth: 100,
                }}
              >
              <Radio 
                id={value}
                value={value} 
                onChange={(e) =>{
                  if ( value == 'Admin' )
                  {
                    setadmin(true)
                    settest(true)
                  }
                  if ( value == 'Supervisor' )
                  {
                    setsupervisor(true)
                    settest(true)
                  }
                  if ( value == 'Jury' )
                  {
                    setjury(true)
                    settest(true)
                  }
                }}
                checkedIcon={<CheckCircleRoundedIcon />}/>
              <Avatar variant="soft" size="sm"/>
              <FormLabel htmlFor={value}>{value} </FormLabel>
            </Sheet>
            ))}
          </RadioGroup><br></br><br></br>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" set>
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered ? <Link to="/login">Sign in</Link>
          </p><br></br>
          <p id='button'>{msg}</p>
        </form>
      </Fragment>
    )
}

export default SignUp;