import "./App.css";
import Table from "./Components/28112022/Table.js";
import{  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App ">  
    <Table/>  
    <h3>Made with love by: <a href="https://github.com/Shivproj">Shiv Sai Indrakanti</a></h3>  

    </div>
    </Router>
  );
}

export default App;
