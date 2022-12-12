import {useState} from 'react'
import {Link,useHistory,useRouteMatch} from 'react-router-dom'


const Login=()=> {
  const [details,setDetails] = useState();
  const display=()=>{   
    console.log(details);
    history.push(`/Profile/${details.UserName}`)
  }
  const {url,params} = useRouteMatch();
  const history=useHistory();
  return (
    <div>
       <div><label classname="col-md-3  ">User Name:</label> <input type="text" className="ms-5 col-md-6" onChange={(e)=>setDetails({...details,UserName:e.target.value})}/>
       {details?.UserName?<p></p>:<p className="text-danger col-md-9">Please enter your username</p>}
       
       
       </div>
        <div><label className="col-md-1">Password:</label><input className="col-md-6"type="text" onChange={(e)=>setDetails({...details,Password:e.target.value})}/></div>
        {details?.Password?<p></p>:<p className="text-danger col-md-9">Please enter your password</p>}
        <div class="form-group">
          <button type="button" className="btn btn-primary"onClick={()=>display()}>Login</button>
          <Link to="/Register" className="text-primary text-decoration-none">Register</Link>
       
        </div>

      
    </div>
  )
}

export default Login
