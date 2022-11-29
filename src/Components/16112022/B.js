
const B =(props)=> {
    const check=()=>{   
           

        props.update(parseFloat(props.a) + parseFloat(props.b))

    }
    
        return(
            <div>
                <button onClick={()=>check()}>Sum</button>
            
            
            
            </div>)
    


}
export default B;