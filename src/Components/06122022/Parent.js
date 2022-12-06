import {Link,Switch,Route,useRouteMatch} from 'react-router-dom'
import Table from './Table';
import Form from './Form';
const Parent=()=>{
    const {url,params} = useRouteMatch()
return(
    <>
    <div>Parent</div>
    <Link to={`${url}/Table`}>Table</Link>
    <Link to ={`${url}/Form`}>Form</Link>
    <Switch>
        <Route path= {`${url}/Table`} children={<Table/>}/>
        <Route path= {`${url}/Form`} children={<Form/>}/>
    </Switch>
    </>
)
}
export default Parent