import "./App.css";
import A from "./Components/29112022/A.js";
import B from "./Components/29112022/B.js";
import Table from "./Components/28112022/Table.js";
import{  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App ">  
    <Table/>    
{/*       
      <A/>
      <B/> */}
    </div>
    </Router>
  );
}

export default App;
