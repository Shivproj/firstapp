import { Link, Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import Table from "./Table";
import Form from "./Form";
const Parent = () => {
  const { url, params } = useRouteMatch();
  return (
    <>
      <Redirect to={`${url}/Table`} />

      <Switch>
        <Route path={`${url}/Table`} children={<Table />} />
        <Route path={`${url}/Form/:mode/:id?`} children={<Form />} />
      </Switch>
    </>
  );
};
export default Parent;
