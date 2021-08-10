import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router';
import { Home } from "./pages/Home";
import { SendReceive } from "./pages/Send&Receive";
import { Profile, Security, Notification, About } from "./pages/Settings";
import { SidebarTwo } from './components/SidebarTwo';
import { Investment } from './pages/Investment';
import { Logout } from './pages/Logout';
import { Login } from './pages/Login';
import { UserForm } from './pages/UserForm';
function App() {
  return (
    <Router>

        <Switch location={window.location} key={window.location.pathname}>
        <Route path='/login' component={Login} />
        <SidebarTwo/>
        <Route exact path='/home' component={Home} />
        <Route exact path='/send&receive' component={SendReceive} />
        <Route exact path='/settings/profile' component={Profile} />
        <Route exact path='/settings/security' component={Security} />
        <Route exact path='/settings/notification' component={Notification} />
        <Route exact path='/settings/about' component={About} />
        <Route exact path='/logout' component={Logout} />
        <Redirect to='/login' />
      </Switch>
    </Router>
  );
}

export default App;