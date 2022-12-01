import {useParams} from 'react-router-dom'
const A =()=>{
    const {id} = useParams();
    return(
        <div>
            <h1>id:{id}</h1></div>
    )
};
export default A;