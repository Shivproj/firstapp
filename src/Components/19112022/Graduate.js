import {useState } from 'react';
const Graduate =(props)=>{
    const [graduateData,setgraduateData] = useState({});

    return(
        <div>
            <div className="form-item">
                <input type="text" onChange ={(e)=>{setgraduateData({...graduateData,College:e.target.value});props.graduate({...graduateData,College:e.target.value})}} />
            </div>
            <div className="form-item">
                <input type="text" onChange ={(e)=>{setgraduateData({...graduateData,CGPA:e.target.value});props.graduate({...graduateData,CGPA:e.target.value})}} />
            </div>
            <div className="form-item">
                <input type="number" onChange ={(e)=>{setgraduateData({...graduateData,Year:e.target.value });props.graduate( {...graduateData,Year:e.target.value } )}} />
            </div>

           
    





        </div>
    )

};

export default Graduate;