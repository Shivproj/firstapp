import Add from './Add';
import Sub from './Sub';
import {useState} from 'react';


const Result =()=>{
    const[res,setRes] = useState();

    const Sums =(data1)=>{
        setRes(data1);

    }
    const Subs= (data2) => {
        setRes(data2);


    }
    return(
        <>
             <div><h1>The result is:</h1><input type="text" value={res}/></div>
             <>
        <div className="container row  ps-6">
            <div className="col-md-6"><Add Addition={(data1)=>Sums(data1)}/></div>
            <div className="col-md-6"><Sub Subtraction={(data2)=>Subs(data2)}/></div>
        </div>
        </>
       
       
        </>
        
        )


};
export default Result;