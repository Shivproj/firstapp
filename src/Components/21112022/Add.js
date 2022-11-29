import {useState} from 'react';

const Add =(props)=>{
    const[a,setA]=useState(0);
    const[b,setB]=useState(0);
    const sum=()=>{
        props.Addition(parseFloat(a)+parseFloat(b));

    }
    return(
        <div>
            <h1>Addition</h1>
           <div> <input className ="form-element" type="number" onChange={(e)=>{setA(e.target.value)}} /></div>
           <div><input className ="form-element" type="number" onChange={(e)=>{setB(e.target.value)}} /></div>
            <button onClick={()=>sum()} >ADD</button>


        </div>

    )
    
}
export default Add;