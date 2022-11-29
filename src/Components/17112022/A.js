import {useState} from 'react'
const A =()=>{
  const [show,setShow] = useState(false);
 const [label,setLabel] = useState("Show");

 




return(
    <div>
        <div>{show && <img src={"https://www.sedsvit.in/img/Board2022/Shiv.png"}/>}</div>
    <button onClick={()=>{setShow(!show);show?setLabel("Show"):setLabel("Hide")}}>{label}</button>
    </div>

)
}
export default A;