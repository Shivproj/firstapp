const Table=(props)=>{ 

    return(

    <div>
        <table style={{border: '1px solid' ,padding: '5px'}}>
            <thead>
                <tr>
                    <th style={{border: '1px solid'}}>Name</th>
                    <th style={{border: '1px solid'}}>Age</th>
                    <th style={{border: '1px solid'}}>Gender</th>
                    <th style={{border: '1px solid'}}>College</th>
                    <th style={{border: '1px solid'}}>CGPA</th>
                    <th style={{border: '1px solid'}}>Year</th>
                    <th style={{border: '1px solid'}}>School</th>
                    <th style={{border: '1px solid'}}>GPA</th>
                    <th style={{border: '1px solid'}}>School Year</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map((item)=><tr style={{border: '1px solid'}}>
                    <td style={{border: '1px solid'}}>{item?.Name}</td>
                    <td style={{border: '1px solid'}}>{item?.Age}</td>
                    <td style={{border: '1px solid'}}>{item?.Gender}</td>
                    <td style={{border: '1px solid'}}>{item.data1?.College}</td>
                     <td style={{border: '1px solid'}}>{item.data1?.CGPA}</td>
                     <td style={{border: '1px solid'}}>{item.data1?.Year}</td>
                     <td style={{border: '1px solid'}}>{item.data2?.School}</td>
                     <td style={{border: '1px solid'}}>{item.data2?.GPA}</td>
                     <td style={{border: '1px solid'}}>{item.data2?.SYear}</td>
                     
                     

                    </tr>)}
                
            </tbody>
        </table>
    </div>
    
    
    )

}
export default Table;
