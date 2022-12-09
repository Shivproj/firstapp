import{useSelector,useDispatch} from 'react-redux';
import{useState} from 'react';
import { setUserName , setPassword} from './details';
const Login =()=>{ 
    const get = useSelector((store)=>store.details.value);
    const get1 = useSelector((store)=>store.details.password);
    const set = useDispatch();

    const[details,setDetails] = useState({});
    return(<>
     
        <input type="text" onChange={(e)=>setDetails({...details,name:e.target.value})}/>
        <input type="text" onChange={(e)=>setDetails({...details,password:e.target.value})}/>
       
       
        <button onClick={()=>{set(setUserName(details.name));set(setPassword(details.password))}}>Login</button>
        <div>{get}</div>
        <div>{get1}</div>
        </>
    )

}
export default Login;
