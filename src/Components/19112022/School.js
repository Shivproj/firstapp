import {useState} from 'react';
const School=(props)=>{
        const [schoolData,setSchoolData] = useState({});
    return (
        <div>
             <div className="form-item">
                <input type="text" onChange ={(e)=>{setSchoolData({...schoolData,School:e.target.value});props.school({...schoolData,School:e.target.value})}} />
            </div>
            <div className="form-item">
                <input type="text" onChange ={(e)=>{setSchoolData({...schoolData,GPA:e.target.value});props.school({...schoolData,GPA:e.target.value})}} />
            </div>
            <div className="form-item">
                <input type="number" onChange ={(e)=>{setSchoolData({...schoolData,SYear:e.target.value });props.school({...schoolData,SYear:e.target.value })}} />
            </div>






        </div>
    )
    
}
export default School;
