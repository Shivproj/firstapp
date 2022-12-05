import { Route,useRouteMatch ,Link,Switch} from "react-router-dom";
import About from './About';
import Information from './Information';
const Home =()=>{
    let { path, url } = useRouteMatch();
return(
    <div>
        <Link to={`${url}/About`}>About</Link>
        <Link to={`${url}/Information`}>Information</Link>

        <Switch>
            <Route path={`${url}/About`} children={<About/>}/>
            <Route path={`${url}/Information`} children={<Information/>}/>
         
        </Switch>

        
        
        
        
        Home</div>
);

}
export default Home;