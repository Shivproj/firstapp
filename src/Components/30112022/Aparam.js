import { useParams } from "react-router-dom";
const Aparam =()=>{
    const {id} = useParams()
    
    return(
        <div><h1>Id is : {id}</h1></div>
    )

};
export default Aparam;