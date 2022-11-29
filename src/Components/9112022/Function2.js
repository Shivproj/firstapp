import Class2 from './Class2'
const Function2 =(props) =>{
   
    return(
        <div>
        <h1>Function2</h1>
        <Class2/>
        <h1>{props.dataA}</h1>
        <h1>{props.dataB}</h1>

        </div>
    )
}

export default Function2;