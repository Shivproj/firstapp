import {useEffect,useState} from 'react';

const A =()=>{
    const [dataList,setDataList]= useState([]);
    const [name,setName]=useState();
    
    useEffect(() => { 
        
       
        apiGet();
       
         
        


    },[])
    const apiGet = () => {
        
        fetch("https://shivsai-test.herokuapp.com/data")  
          .then((response) => response.json())
          .then((json) => {
            
            setDataList(json);
            setName(dataList[0].Name);
            
          
        });
      };
    // const funBtn=()=>{
       
    //     apiGet()
        
     


        
    // }
    
    

    

    return(
        <>

        <h1>{name}</h1>
             
       
        
        {/* <button onClick={()=>funBtn()}>Get Data</button> */}
        <table>
            <thead><tr><th>Name</th><th>Gender</th><th>Club</th></tr></thead>
            <tbody>
                {dataList.map(((item)=>{
                return (<tr>
                    <td>{item.Name}</td>
                    <td>{item.Gender}</td>
                    <td>{item.Club}</td>

                </tr>)}))}
                
            </tbody>
        </table>
        
        </>


    );
}
export default A;