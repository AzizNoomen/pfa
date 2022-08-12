/*<Route exact path="/" element={<Login/>} />
<Route path="/login" element={<Login/>} />
<Route exact path="/sign-up" element={<SignUp />} />
<Route exact path="/Jury_Space" element={<Jury_Space/>}/>*/
/*<div >
<RadioGroup required
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
      <Radio id={value} value={value} required checkedIcon={<CheckCircleRoundedIcon />} onChange={(e) =>{
      setadmin(e.target.value)
    }} />
      <Avatar variant="soft" size="sm" required />
      <FormLabel htmlFor={value}>{value} </FormLabel>
    </Sheet>
  ))}
  
</RadioGroup><br></br>
</div>*/

/*<Route exact path="/" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth}/> : <Navigate to= "/dashborad"/>} />
<Route path="/login" render={props=> !isAuthenticated ? <Login {...props} setAuth={setAuth}/> : <Navigate to= "/dashborad"/>} />
<Route exact path="/sign-up" render={ props=> !isAuthenticated ? <SignUp {...props} setAuth={setAuth}/> : <Navigate to= "/dashborad"/>} />
<Route exact path="/Jury_Space" render={props => isAuthenticated ? <Jury_Space {...props} setAuth={setAuth}/> : <Navigate to= "/login"/>}/>*/


/*<div className='mb-3'>
<input
  type='radio'
  id='admin'
  name='selection'
  value='admin'
/>
<label id="Admin">Admin</label>
<input
  type='radio'
  id='jury'
  name='selection'
  value='jury'
  required
/>
<label id="Jury"> Jury </label>
<input
  type='radio'
  id='supervisor'
  name='selection'
  value='supervisor'
/>
<label id="Supervisor">Supervisor</label>
</div>
<br></br>*/


/*useEffect(() => { 
  let mounted = true;
  const loadData = async () => {
    const res = await Axios.get("http://localhost:3006/eya");
    if (mounted) {
      settable(res.data); 
      console.log(res.data) ;   
    }
  };
  loadData();
  return () => {
    mounted = false;
  };
},["http://localhost:3006/eya"]);*/

/*const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'name',
    width: 150,
    editable: true,
  },{
    field: 'email',
    headerName: 'email',
    width: 150,
    editable: true,
  },{
    field: 'password',
    headerName: 'password',
    width: 150,
    editable: true,
  },{
    field: 'jury',
    headerName: 'jury',
    width: 150,
    editable: true,
  },{
    field: 'supervisor',
    headerName: 'supervisor',
    width: 150,
    editable: true,
  },{
    field: 'admin',
    headerName: 'admin',
    width: 150,
    editable: true,
  },]*/

  /*<ul>
          {table.map(item =>(
            <li key={item.id}>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>*/

/*<div className="mb-3">
            <input
              id="admin"
              type="radio"
              value={admin} 
              name="options"
              onChange={(e) =>{
                setadmin(true)
              }}
              required
              />
              <label>admin</label>
              <input
              id="supervisor"
              type="radio"
              value={supervisor} 
              name="options"
              onChange={(e) =>{
                setsupervisor(true)
              }}
              required
              />
              <label>supervisor</label>
              <input
              id="jury"
              type="radio"
              value={jury} 
              name="options"
              onChange={(e) =>{
                setjury(true)
              }}
              required
              />
              <label>jury</label>
          </div>*/
