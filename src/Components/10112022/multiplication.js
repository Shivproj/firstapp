import Subtraction from './subtraction'
const Multiplication =(props)=>{
   
  
    return(<div>
    <h1>{props.A*props.B}</h1>
    <Subtraction A={props.A}B= {props.B}/>
    </div>)

}
export default Multiplication