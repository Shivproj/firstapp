
import {useState} from 'react';
import B from './B';

const A = (props)=>{  
    debugger 
    const [obj,setObj] = useState({name:'Shiv',age:20,age2:11});
    const fun =()=>{
        setObj({...obj,age2:30})
    }
    return(
        <div>
            <B fun={()=>fun()}/>     
        
      <h1>{obj.age2}</h1>
      <h1>{obj.name}</h1>
        
        </div>
    )
}
export default A 
