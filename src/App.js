import "./App.css";
import{BrowserRouter,Switch,Link, Route} from 'react-router-dom';
import A from './Components/29112022/A';
import B from './Components/29112022/B';
import Navbar from './Components/navbar';

function App() {
   return (
    <>
    
   
    
  
    <div className="App ">

    
      <h1>Hi</h1> 
      <Link to="/A/One">One</Link>
      <Link to="/A/Two">Two </Link>
      <Link to="/A/Three">Three</Link>
      <Link to="/A/Four">Four</Link>
     
    <Switch>

  <Route path="/A/:id" exact children={<A/>}/>
 
    <Route path="/B" exact children={<B/>}/>
   
    </Switch>
  


    
      

    </div>
    </>

  
    
  )


}

export default App;
