import "./App.css";
import{BrowserRouter,Switch,Link, Route} from 'react-router-dom';
import A from './Components/29112022/A';
import B from './Components/29112022/B';
import Navbar from './Components/navbar';

function App() {
  return (
    <>
    
    <Navbar/>
    
  
    <div className="App ">
    
      <h1>Hi</h1> 
      
     
    <Switch>

  <Route path="/A" exact component={A}/>
 
    <Route path="/B" exact component={B}/>
   
    </Switch>
  


    
      

    </div>
    </>
  
    
  );
}

export default App;
