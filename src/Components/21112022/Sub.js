import {useState} from 'react';
const Sub =(props)=>{
    
        
        const[a,setA]=useState(0);
        const[b,setB]=useState(0);
        const sub=()=>{

            props.Subtraction(a-b);
    
        }
        return(
            <div>
                <h1>Subtraction</h1>
               <div><input className ="form-element" type="number" onChange={(e)=>{setA(e.target.value)}} /></div>
               <div><input className ="form-element" type="number" onChange={(e)=>{setB(e.target.value)}} /></div>
                <button onClick={()=>sub()} >SUB</button>
    
    
            
            </div>
        
        )
};
export default Sub;