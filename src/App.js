import Fetching from './components/FetchingData';
import { Route, Switch } from "react-router-dom";
import Menu from './components/Menu';
import UserData from './components/UserData';

const App = () => {

  return (<>
    <Menu />
    <Switch>
      <Route exact path="/" component={UserData} />
      <Route exact path="/Fetching" component={Fetching} />
    </Switch>
  </>
  );
}

export default App;
