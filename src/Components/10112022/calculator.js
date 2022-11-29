const Calculator=()=>{
    
      const Addfun=()=>{
        
       console.log(parseFloat(document.getElementById("input1").value) + parseFloat(document.getElementById("input2").value))
      }
      const Mulfun=()=>{
        
        console.log(document.getElementById("input1").value * document.getElementById("input2").value)
       }
       const Divfun=()=>{
        
        console.log(document.getElementById("input1").value / document.getElementById("input2").value)
       }

return(
<div>
<h1>My Calculator</h1>
<input type="text" id="input1"/>
<input type="text"  id="input2"/>
<button type="button" onClick={Addfun}>Add</button>
<button type="button" onClick={Mulfun}>Mul</button>
<button type="button" onClick={Divfun}>Div</button>

</div>
)


}

export default Calculator 

