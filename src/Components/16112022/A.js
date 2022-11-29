import React from 'react';
import B from './B';
class A extends React.Component {
    state = {a:0,b:0,c:0};
   
  
    setSum=(data)=>{
        this.setState({...this.state,c:data})

    }

    render() {
        return(
            <div>
                <label>A</label><input  type="text" id="inp1" onChange={(e)=>{this.setState({...this.state,a:e.target.value})}}/>
                <br/>
                <label>B</label><input  type="text" id="inp2" onChange={(e)=>{this.setState({...this.state,b:e.target.value})}}/>
               
                <B a={this.state.a} b={this.state.b} update={(data)=>{this.setSum(data)}}/>

                <h1>{this.state.c}</h1>

            </div>)
    }

}
export default A;